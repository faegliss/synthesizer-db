// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Image")
                .setHost(host,"Synth V")
                .setName("Synth V")
                .setDesc("Screenshot of Synth V interface.")
                .setLeft("0.7619047619047619em")
                .setTop("1.5238095238095237em")
                .setWidth("29.257142857142856em")
                .setHeight("14.780952380952382em")
                .setSrc("https://dreamtonics.com/synthesizerv-gen1/common/images/download_pic.png")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label9")
                .setLeft("11.428571428571429em")
                .setTop("16.761904761904763em")
                .setWidth("8.457142857142857em")
                .setHeight("3.5047619047619047em")
                .setCaption("Image of the Synth V interface.")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label13")
                .setLeft("32.76190476190476em")
                .setTop("1.5238095238095237em")
                .setWidth("23.695238095238096em")
                .setHeight("14.17142857142857em")
                .setCaption("SYNTH V is a vocal synthesizer created by Dreamtonics, it is mainly known for its realistic vocals and easy use.")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label16")
                .setLeft("32.76190476190476em")
                .setTop("6.095238095238095em")
                .setWidth("23.695238095238096em")
                .setHeight("11.123809523809523em")
                .setCaption("Some of its most well known voicebanks are: Eleanor Forte, Tsurumaki Maki and Koharu Rikka.")
            );
            
            append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image11")
                .setLeft("32.76190476190476em")
                .setTop("9.904761904761905em")
                .setWidth("9.447619047619048em")
                .setHeight("9.447619047619048em")
                .setSrc("http://pm1.narvii.com/7151/c7fc9d39419855fd23329369fdd53f92030301d5r1-879-879v2_00.jpg")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label23")
                .setLeft("33.523809523809526em")
                .setTop("19.80952380952381em")
                .setWidth("7.695238095238095em")
                .setHeight("3.5047619047619047em")
                .setCaption("Picture of Eleanor Forte.")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});