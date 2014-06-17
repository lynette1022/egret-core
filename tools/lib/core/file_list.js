exports.core = [
    "egret/utils/HashObject.js",
    "egret/utils/Recycler.js",
    "egret/utils/getTimer.js",
    "egret/utils/callLater.js",
    "egret/events/Event.js",
    "egret/events/IOErrorEvent.js",
    "egret/events/TouchEvent.js",
    "egret/events/TimerEvent.js",
    "egret/events/EventPhase.js",
    "egret/events/EventDispatcher.js",
    "egret/context/MainContext.js",
    "egret/utils/Profiler.js",
    "egret/context/Ticker.js",
    "egret/layout/HorizontalAlign.js",
    "egret/layout/VerticalAlign.js",
    "egret/utils/Timer.js",
    "egret/utils/getQualifiedClassName.js",
    "egret/utils/getDefinitionByName.js",
    "egret/utils/hasDefinition.js",
    "egret/utils/toColorString.js",
    "egret/geom/Matrix.js",
    "egret/geom/Point.js",
    "egret/geom/Rectangle.js",
    "egret/utils/Logger.js",
    "egret/context/StageDelegate.js",
    "egret/context/renderer/RenderFilter.js",
    "egret/utils/Injector.js",
    "egret/display/DisplayObject.js",
    "egret/display/DisplayObjectContainer.js",
    "egret/display/Stage.js",
    "egret/display/BitmapFillMode.js",
    "egret/display/Bitmap.js",
    "egret/text/BitmapText.js",
    "egret/display/Graphics.js",
    "egret/display/Shape.js",
    "egret/display/Sprite.js",
    "egret/text/TextField.js",
    "egret/text/TextFieldType.js",
    "egret/display/SpriteSheet.js",
    "egret/text/TextInput.js",
    "egret/text/BitmapTextSpriteSheet.js",
    "egret/display/MovieClip.js",
    "egret/context/display/StageText.js",

    "egret/net/URLRequestMethod.js",
    "egret/net/URLLoaderDataFormat.js",
    "egret/net/URLVariables.js",
    "egret/net/URLRequest.js",
    "egret/net/URLLoader.js",
    "egret/display/Texture.js",
    "egret/display/RenderTexture.js",
    "egret/context/renderer/RendererContext.js",
    "egret/context/interactive/InteractionMode.js",
    "egret/context/interactive/TouchContext.js",
    "egret/context/net/NetContext.js",
    "egret/context/devices/DeviceContext.js",
    "egret/context/Browser.js",
    //utils start
    "jslib/ZipUtils.js",
    "jslib/base64.js",
    "jslib/gzip.js",
    "jslib/zlib.min.js",

    "egret/utils/XML.js",
    //utils end
    //tween start
    "egret/tween/Tween.js",
    "egret/tween/Ease.js",
    //tween end

    "egret/media/Sound.js",

     //GUI start
    "extension/gui/collections/ArrayCollection.js",
    "extension/gui/collections/ObjectCollection.js",
    "extension/gui/managers/LayoutManager.js",
    "extension/gui/managers/layoutClass/DepthQueue.js",
    "extension/gui/core/UIGlobals.js",
    "extension/gui/core/UIComponent.js",
    "extension/gui/core/PopUpPosition.js",
    "extension/gui/core/ScrollPolicy.js",
    "extension/gui/core/ClassFactory.js",
    "extension/gui/states/OverrideBase.js",
    "extension/gui/states/AddItems.js",
    "extension/gui/states/SetProperty.js",
    "extension/gui/states/State.js",
    "extension/gui/components/UIAsset.js",
    "extension/gui/components/SkinnableComponent.js",
    "extension/gui/components/supportClasses/DefaultSkinAdapter.js",
    "extension/gui/components/supportClasses/DefaultAssetAdapter.js",
    "extension/gui/components/supportClasses/SkinBasicLayout.js",
    "extension/gui/components/supportClasses/ButtonBase.js",
    "extension/gui/components/supportClasses/ToggleButtonBase.js",
    "extension/gui/components/supportClasses/TextBase.js",
    "extension/gui/components/supportClasses/GroupBase.js",
    "extension/gui/components/supportClasses/ItemRenderer.js",
    "extension/gui/components/supportClasses/TreeItemRenderer.js",
    "extension/gui/components/supportClasses/Animation.js",
    "extension/gui/components/supportClasses/Range.js",
    "extension/gui/components/supportClasses/TrackBase.js",
    "extension/gui/components/supportClasses/SliderBase.js",
    "extension/gui/components/Label.js",
    "extension/gui/components/Rect.js",
    "extension/gui/components/Button.js",
    "extension/gui/components/ToggleButton.js",
    "extension/gui/components/CheckBox.js",
    "extension/gui/components/RadioButtonGroup.js",
    "extension/gui/components/RadioButton.js",
    "extension/gui/components/Group.js",
    "extension/gui/components/ViewStack.js",
    "extension/gui/components/Skin.js",
    "extension/gui/components/DataGroup.js",
    "extension/gui/components/SkinnableContainer.js",
    "extension/gui/components/SkinnableDataContainer.js",
    "extension/gui/components/supportClasses/ListBase.js",
    "extension/gui/components/Panel.js",
    "extension/gui/components/TitleWindow.js",
    "extension/gui/components/Alert.js",
    "extension/gui/components/ProgressBar.js",
    "extension/gui/components/ProgressBarDirection.js",
    "extension/gui/components/HSlider.js",
    "extension/gui/components/VSlider.js",
    "extension/gui/components/List.js",
    "extension/gui/components/PopUpAnchor.js",
    "extension/gui/components/supportClasses/DropDownController.js",
    "extension/gui/components/supportClasses/DropDownListBase.js",
    "extension/gui/components/Tree.js",
    "extension/gui/components/DropDownList.js",
    "extension/gui/components/TabBarButton.js",
    "extension/gui/components/TabBar.js",
    "extension/gui/components/Scroller.js",
    "extension/gui/events/UIEvent.js",
    "extension/gui/events/PropertyChangeEvent.js",
    "extension/gui/events/PropertyChangeEventKind.js",
    "extension/gui/events/MoveEvent.js",
    "extension/gui/events/ResizeEvent.js",
    "extension/gui/events/SkinPartEvent.js",
    "extension/gui/events/CloseEvent.js",
    "extension/gui/events/CollectionEvent.js",
    "extension/gui/events/CollectionEventKind.js",
    "extension/gui/events/ElementExistenceEvent.js",
    "extension/gui/events/IndexChangeEvent.js",
    "extension/gui/events/ListEvent.js",
    "extension/gui/events/PopUpEvent.js",
    "extension/gui/events/RendererExistenceEvent.js",
    "extension/gui/events/StateChangeEvent.js",
    "extension/gui/events/TrackBaseEvent.js",
    "extension/gui/events/TreeEvent.js",
    "extension/gui/layouts/supportClasses/LayoutBase.js",
    "extension/gui/layouts/BasicLayout.js",
    "extension/gui/layouts/ColumnAlign.js",
    "extension/gui/layouts/RowAlign.js",
    "extension/gui/layouts/TileOrientation.js",
    "extension/gui/layouts/VerticalLayout.js",
    "extension/gui/layouts/HorizontalLayout.js",
    "extension/gui/layouts/TileLayout.js",
    "extension/gui/core/UILayer.js",
    "extension/gui/core/UIStage.js",
    "extension/gui/managers/impl/PopUpManagerImpl.js",
    "extension/gui/managers/PopUpManager.js",
    //GUI end
    "extension/dragonbones/dragonBones.js",
    "extension/dragonbones/DragonBonesEgretBridge.js",
    "jslib/DEBUG.js",
//    "jslib/box2d.js",
    "jslib/NumberUtils.js",

    //resource start
    "extension/resource/events/ResourceEvent.js",
    "extension/resource/core/ResourceItem.js",
    "extension/resource/core/ResourceConfig.js",
    "extension/resource/core/ResourceLoader.js",
    "extension/resource/analyzer/AnalyzerBase.js",
    "extension/resource/analyzer/BinAnalyzer.js",
    "extension/resource/analyzer/ImageAnalyzer.js",
    "extension/resource/analyzer/JsonAnalyzer.js",
    "extension/resource/analyzer/TextAnalyzer.js",
    "extension/resource/analyzer/SheetAnalyzer.js",
    "extension/resource/analyzer/FontAnalyzer.js",
    "extension/resource/analyzer/SoundAnalyzer.js",
    "extension/resource/analyzer/XMLAnalyzer.js",
    "extension/resource/Resource.js"
    //resource end
]

exports.html5 = [
    "egret/context/devices/HTML5DeviceContext.js",
    "egret/context/renderer/HTML5CanvasRenderer.js",
    "egret/context/net/HTML5NetContext.js",
    "egret/context/interactive/HTML5TouchContext.js",
    "egret/utils/SAXParser.js"

]

exports.native = [
    "egret/context/devices/NativeDeviceContext.js",
    "egret/context/renderer/NativeRendererContext.js",
    "egret/context/interactive/NativeTouchContext.js",
    "egret/context/net/NativeNetContext.js"

];
