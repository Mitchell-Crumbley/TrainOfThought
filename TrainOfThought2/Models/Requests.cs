using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TrainOfThought.Models
{
    public class Requests
    {
        public Guid requestId { get; set; }
        public string RequestedWord { get; set; }
        public string ConnectedWord { get; set; }
        public string WordType { get; set; }
        public Guid UserId { get; set; }
    }
}