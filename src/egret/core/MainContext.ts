/**
 * Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
 * to any person obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom
 * the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/// <reference path="../context/devices/DeviceContext.ts"/>
/// <reference path="../context/net/NetContext.ts"/>
/// <reference path="../context/renderer/RendererContext.ts"/>
/// <reference path="../context/sound/SoundContext.ts"/>
/// <reference path="Ticker.ts"/>
/// <reference path="../display/DisplayObject.ts"/>
/// <reference path="../display/Stage.ts"/>
/// <reference path="../events/Event.ts"/>
/// <reference path="../events/EventDispatcher.ts"/>
/// <reference path="../interactive/TouchContext.ts"/>
/// <reference path="../utils/Recycler.ts"/>
/// <reference path="../utils/callLater.ts"/>

module ns_egret{
    /**
	 * @class ns_egret.MainContext
	 * @classdesc
     * MainContext是游戏的核心跨平台接口，组合了多个功能Context，并是游戏启动的主入口
	 * @extends ns_egret.EventDispatcher
     */
    export class MainContext extends EventDispatcher {

        constructor() {
            super();
        }

        /**
         * 渲染Context
		 * @member ns_egret.MainContext#rendererContext
         */
        public rendererContext:RendererContext;

        /**
         * 触摸Context
		 * @member ns_egret.MainContext#touchContext
         */
        public touchContext:TouchContext;

        /**
         * 声音Context
		 * @member ns_egret.MainContext#soundContext
         */
        public soundContext:SoundContext;

        /**
         * 网络Context
		 * @member ns_egret.MainContext#netContext
         */
        public netContext:NetContext;

        /**
         * 设备divice
		 * @member ns_egret.MainContext#deviceContext
         */
        public deviceContext:DeviceContext;

        /**
         * 舞台
		 * @member ns_egret.MainContext#stage
         */
        public stage:Stage;

        /**
         * 游戏启动，开启主循环，参考Flash的滑动跑道模型
		 * @method ns_egret.MainContext#run
         */
        public run() {
            Ticker.getInstance().run();
            Ticker.getInstance().register(this.renderLoop, this, Number.MIN_VALUE);
            Ticker.getInstance().register(this.broadcastEnterFrame, this, Number.MAX_VALUE);
            this.touchContext.run();
        }

        /**
         * 滑动跑道模型，渲染部分
         */
        private renderLoop(frameTime:number) {
            var context = this.rendererContext;
            context.clearScreen();
            this.dispatchEventWith(Event.RENDER);
            if(Stage._invalidateRenderFlag){
                this.broadcastRender();
                Stage._invalidateRenderFlag = false;
            }
            this.doCallLaterList();
            this.stage.updateTransform();
            this.dispatchEventWith(Event.FINISH_UPDATE_TRANSFORM);
            this.stage.draw(context);
            this.dispatchEventWith(Event.FINISH_RENDER);
        }

        private reuseEvent:Event = new Event("")
        /**
         * 广播EnterFrame事件。
         */
        private broadcastEnterFrame(frameTime:number):void {

            var event:Event = this.reuseEvent;
            event._type = Event.ENTER_FRAME;
            this.dispatchEvent(event);
            var list:Array<any> = DisplayObject._enterFrameCallBackList.concat();
            var length:number = list.length;
            for(var i:number = 0;i<length;i++){
                var eventBin:any = list[i];
                event._target = eventBin.display;
                event._setCurrentTarget(eventBin.display);
                eventBin.listener.call(eventBin.thisObject,event);
            }

            list = Recycler._callBackList;
            for(i=list.length-1;i>=0;i--){
                list[i]._checkFrame();
            }
        }
        /**
         * 广播Render事件。
         */
        private broadcastRender():void{
            var event:Event = this.reuseEvent;
            event._type = Event.RENDER;
            var list:Array<any> = DisplayObject._renderCallBackList.concat();
            var length:number = list.length;
            for(var i:number = 0;i<length;i++){
                var eventBin:any = list[i];
                event._target = eventBin.display;
                event._setCurrentTarget(eventBin.display);
                eventBin.listener.call(eventBin.thisObject,event);
            }
        }
        /**
         * 执行callLater回调函数列表
         */
        private doCallLaterList():void{
            if(__callLaterFunctionList.length==0){
                return;
            }
            var funcList:Array<any> = __callLaterFunctionList;
            __callLaterFunctionList = [];
            var thisList:Array<any> = __callLaterThisList;
            __callLaterThisList = [];
            var argsList:Array<any> = __callLaterArgsList;
            __callLaterArgsList = [];
            var length:number = funcList.length;
            for(var i:number=0;i<length;i++){
                var func:Function = funcList[i];
                if(func!=null){
                    func.apply(thisList[i],argsList[i]);
                }
            }
        }

		/**
		 * @member ns_egret.MainContext.instance
		 */
        public static instance:ns_egret.MainContext;

    }
}

ns_egret.MainContext.instance = new ns_egret.MainContext();