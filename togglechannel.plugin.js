//META{"name":"toggleChannel"}*//

var toggleChannel=function(){};

toggleChannel.prototype.start=function()
{

};

toggleChannel.prototype.load=function()
{
    var this1=this;
    this1.hookButton();

    $(".guild").on("click",function(e){
        this1.hookButton();
        console.log("hey");
    });
};

toggleChannel.prototype.unload=function()
{

};

toggleChannel.prototype.stop=function()
{

};

toggleChannel.prototype.onMessage=function()
{

};

toggleChannel.prototype.onSwitch=function()
{
    // this.hookButton();
};

toggleChannel.prototype.observer=function (e)
{
    //raw MutationObserver event for each mutation
};

toggleChannel.prototype.getSettingsPanel=function()
{

};

toggleChannel.prototype.getName=function()
{
    return "toggleChannel";
};

toggleChannel.prototype.getDescription=function()
{
    return "right click direct message (friend) button to hide channel list";
};

toggleChannel.prototype.getVersion=function()
{
    return "2.2";
};

toggleChannel.prototype.getAuthor=function()
{
    return "rishona";
};

toggleChannel.prototype.hookButton=function()
{
    // var hookButton=$(".icon-1R19_H");
    var hookButton=$(".friends-icon");

    // if (hookButton.length!=5)
    // {
    //     setTimeout(this.hookButton,100);
    //     return;
    // }

    // hookButton=hookButton.eq(2);

    if (!hookButton)
    {
        setTimeout(this.hookButton,100);
        return;
    }

    hookButton.off("contextmenu");
    hookButton.on("contextmenu",(e)=>{
        e.preventDefault();
        $(".channels-Ie2l6A").toggleClass("channels-wrap-hide");
    });

};
