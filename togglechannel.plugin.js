//META{"name":"toggleChannel"}*//

/*custom css (paste it in better discord custom css area):
.channels-Ie2l6A.channels-wrap-hide
{
    display:none;
}

.guilds .guild.selected.unread::before
{
    background-color: #f04747;
}
*/

class toggleChannel
{
    start()
    {

    }

    load()
    {
        this.runButtonHook();

        //refresh hook when clicking on server icons
        $(".da-guild").on("click",(e)=>{
            this.runButtonHook();
        });
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
        return "2.3.1";
    }

    getAuthor()
    {
        return "rishona";
    }

    runButtonHook()
    {
        //button to attach toggle channel to (users in current discord channel button)
        var attachbutton=$(".icon-1R19_H[name=People]");
        //other button (friend button)
        var friendButton=$(".guild-1EfMGQ:first");

        if (!attachbutton.length)
        {
            setTimeout(this.runButtonHook,100);
            return;
        }

        attachbutton.off("contextmenu");
        attachbutton.on("contextmenu",(e)=>{
            e.preventDefault();

            //class to attach hidden class to
            $(".channels-Ie2l6A").toggleClass("channels-wrap-hide");
        });

        friendButton.off("contextmenu");
        friendButton.on("contextmenu",(e)=>{
            //should be same as above event. not a function because discord
            //loses reference of This often for some reason
            e.preventDefault();
            $(".channels-Ie2l6A").toggleClass("channels-wrap-hide");
        });
    }

    executeChannelHide(e)
    {
        e.preventDefault();

        //class to attach hidden class to
        $(".channels-Ie2l6A").toggleClass("channels-wrap-hide");
    }
}