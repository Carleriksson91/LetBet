using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LetsBet.Models;

namespace LetsBet.Mappers
{
    public static class LeagueMapper
    {
        public static League MapToLeague(this string name)
        {
            return new League {Name = name};
        }
    }
}
