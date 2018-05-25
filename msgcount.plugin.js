//META{"name":"msgcount"}*//

var msgcount=function(){};

msgcount.prototype.start=function()
{

};

msgcount.prototype.load=function()
{
    
};

msgcount.prototype.unload=function()
{

};

msgcount.prototype.stop=function()
{
    
};

msgcount.prototype.onMessage=function()
{

};

msgcount.prototype.onSwitch=function()
{

};

msgcount.prototype.observer=function (e)
{
    //raw MutationObserver event for each mutation
};

msgcount.prototype.getSettingsPanel=function()
{

};

msgcount.prototype.getName=function()
{
    return "msgcount";
};

msgcount.prototype.getDescription=function()
{
    return "use msgcount.prototype.count() to overlay msg count starting from bottom";
};

msgcount.prototype.getVersion=function()
{
    return "1";
};

msgcount.prototype.getAuthor=function()
{
    return "rishona";
};

msgcount.prototype.count=function()
{
    var msgs=document.querySelectorAll(".message .markup");

    var y=1;
    for (var x=msgs.length-1;x>0;x--)
    {
        msgs[x].innerHTML+="-----"+y;
        y++;
    }
};
