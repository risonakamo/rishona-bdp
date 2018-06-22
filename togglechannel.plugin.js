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
        var this1=this;
        this1.hookButton();

        $(".guild").on("click",function(e){
            this1.hookButton();
            console.log("hey");
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
        return "right click direct message (friend) button to hide channel list";
    }

    getVersion()
    {
        return "2.2.1";
    }

    getAuthor()
    {
        return "rishona";
    }

    hookButton()
    {
        //button to attach toggle channel to
        var hookButton=$(".icon-1R19_H[name=People]");

        if (!hookButton)
        {
            setTimeout(this.hookButton,100);
            return;
        }

        hookButton.off("contextmenu");
        hookButton.on("contextmenu",(e)=>{
            e.preventDefault();

            //class to attach hidden class to
            $(".channels-Ie2l6A").toggleClass("channels-wrap-hide");
        });
    }
}