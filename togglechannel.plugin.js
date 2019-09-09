//META{"name":"toggleChannel"}*//

/*custom css (paste it in better discord custom css area):
.da-sidebar.channels-wrap-hide
{
    display:none;
}

.guilds .guild.selected.unread::before
{
    background-color: #f04747;
}
*/

const channelClass=".da-sidebar";
class toggleChannel
{
    load()
    {
        this.runButtonHook();
    }

    //attempt to attach hide channel event to target buttons
    runButtonHook()
    {
        console.log("button hook start");

        //button to attach toggle channel to (users in current discord channel button)
        var attachbutton=$(".icon-22AiRD[name=Nova_People]");
        //other button (friend button)
        var friendButton=$(".svg-1X37T1");

        if (!attachbutton.length && !friendButton.length)
        {
            console.log("button hook retry");
            setTimeout(this.runButtonHook,100);
            return;
        }

        attachbutton.off("contextmenu");
        attachbutton.on("contextmenu",(e)=>{
            e.preventDefault();

            //class to attach hidden class to
            $(channelClass).toggleClass("channels-wrap-hide");
            console.log(document.querySelector(channelClass));
        });

        friendButton.off("contextmenu");
        friendButton.on("contextmenu",(e)=>{
            //should be same as above event. not a function because discord
            //loses reference of This often for some reason
            e.preventDefault();
            $(channelClass).toggleClass("channels-wrap-hide");
            console.log("hey");
        });

        console.log("button hook complete");
    }

    executeChannelHide(e)
    {
        e.preventDefault();

        //class to attach hidden class to
        $(channelClass).toggleClass("channels-wrap-hide");
    }

    start()
    {

    }

    unload()
    {

    }

    stop()
    {

    }

    onMessage()
    {

    }

    onSwitch()
    {
        this.runButtonHook();
    }

    observer(e)
    {

    }

    getSettingsPanel()
    {

    }

    getName()
    {
        return "toggleChannel";
    }

    getDescription()
    {
        return "right click direct message (friend) button or Member List button to hide channel list";
    }

    getVersion()
    {
        return "3.0.2";
    }

    getAuthor()
    {
        return "rishona";
    }
}