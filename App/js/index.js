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
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel4")
                .setDock("none")
                .setLeft("3.8095238095238093em")
                .setTop("3.0476190476190474em")
                .setWidth("19.123809523809523em")
                .setHeight("19.123809523809523em")
                .setCaption("Panel")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button5")
                .setLeft("11.047619047619047em")
                .setTop("9.904761904761905em")
                .setCaption("Add wpn")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button11")
                .setLeft("9.6em")
                .setTop("13.714285714285714em")
                .setCaption("Generate Build")
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel7")
                .setDock("none")
                .setLeft("3.8095238095238093em")
                .setTop("25.142857142857142em")
                .setWidth("19.123809523809523em")
                .setHeight("19.123809523809523em")
                .setCaption("Panel")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button14")
                .setLeft("11.047619047619047em")
                .setTop("32em")
                .setCaption("Add wpn")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button15")
                .setLeft("9.6em")
                .setTop("35.80952380952381em")
                .setCaption("Generate Build")
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