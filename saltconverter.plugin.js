//META{"name":"saltcon"}*//

var saltcon=function(){};

saltcon.prototype.start=function()
{

};

saltcon.prototype.load=function()
{
    
};

saltcon.prototype.unload=function()
{

};

saltcon.prototype.stop=function()
{
    
};

saltcon.prototype.onMessage=function()
{

};

saltcon.prototype.onSwitch=function()
{
    this.convert();
};

saltcon.prototype.observer=function (e)
{
    //raw MutationObserver event for each mutation
};

saltcon.prototype.getSettingsPanel=function()
{

};

saltcon.prototype.getName=function()
{
    return "fuckyoursaltyass";
};

saltcon.prototype.getDescription=function()
{
    return "makes salty things into salt";
};

saltcon.prototype.getVersion=function()
{
    return "fucksao";
};

saltcon.prototype.getAuthor=function()
{
    return "rishona";
};

saltcon.prototype.convert=function()
{
    var a=document.querySelectorAll(".avatar-large,.avatar-small");
    
    a.forEach(function(e){
        if (e.style["background-image"].match(/.*https:\/\/cdn\.discordapp\.com\/avatars\/73193539491598336\/3b60de01311dbd3d66070a327cc21852.*/g))
        {
            e.style["background-image"]="url('https://i.imgur.com/ChHMKmS.jpg')";
        }
    });
};
