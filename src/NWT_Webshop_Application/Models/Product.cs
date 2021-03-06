﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace NWT_Webshop_Application.Models
{
    public class Product
    {
        [Key]
        public int ProductID { get; set; }

        [Required]
        [StringLength(30, MinimumLength = 5)]
        public string Name { get; set; }

        [Required]
        [StringLength(500)]
        [DataType(DataType.Text)]
        public string Description { get; set; }

        [Required]
        [StringLength(200)]
        [DataType(DataType.Url)]
        public string ImageURL { get; set; }

        [Required]
        public float Price { get; set; }

        [Display(Name = "Average Score")]
        public float AverageScore { get; set; }

        [StringLength(500)]
        public string Scores { get; set; }

        [Required]
        [StringLength(200)]
        public string Tags { get; set; }

        [JsonIgnore]
        public virtual ICollection<ShoppingCartProduct> ShoppingCartProducts { get; set; }

    }
}