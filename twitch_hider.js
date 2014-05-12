'use strict';
var TwitchHider = function(banned_games)
{
    var that = this;
    this.bannedGames =
        banned_games
        ||
        [
            "Dota 2",
            "League of Legends",
            "Minecraft",
            "Counter-Strike: Global Offensive",
            "RuneScape",
            "DayZ",
            "ArmA III",
            "Diablo III: Reaper of Souls",
            "Diablo III",
            "Hearthstone: Heroes of Warcraft",
            "Smite",
            "World of Warcraft: Mists of Pandaria",
            "StarCraft II: Heart of the Swarm",
            "Magic: The Gathering",
            "Call of Duty: Ghosts"
        ];
    var hide = function(key, val)
    {
        var $this = $(val);
        var title = $this.attr('title')||$this.attr('original-title');
        var $streamitem = $($this.parents('.stream.item')[0]);
        if(that.bannedGames.indexOf(title)>=0)
        {
            $streamitem.hide();
        }
    };
    this.run = function()
    {
        $('.stream.item .boxart').each(hide);
    };
};

var instTwitchHider = new TwitchHider();

instTwitchHider.run();