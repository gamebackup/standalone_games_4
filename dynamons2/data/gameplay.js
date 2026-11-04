{
    "map": {
        "omg": "this is a workaround!"
    },
    "genData": {
		"resetAllData": "false",
		"healTimeLabelThreshold": 3600,
		"enableTutorial": "true",
		"likeCoins": 100
	},
	"adsLogic": {
            "nativeAdDelaySecs": 240,
            "showCrossPromoOnStart": false,
            "maxDailyIncentivized": 30
	},
	"localNotifs": {
		"teamHeal": {
			"minTime": 60,
			"title": "Dynamons 2",
			"text": "Come back, your Dynamons are HEALED!"
		},
		"oneDayAfter": {
			"title": "Dynamons 2",
			"text": "Your Dynamons miss you, come and FIGHT!"
		}
	},
	"tutorial": {
		"startingCoins": 50,
		"startingItems": [
			"levelup_fire,2",
			"levelup_water,2",
			"levelup_earth,2",
			"healing_kit,3",
			"discatch,3"
		],
		"chooseMons": [
		    { "type": "earth", "id": "quacko", "level": 2 },
			{ "type": "water", "id": "pengu", "level": 2 },
			{ "type": "fire", "id": "hopchop", "level": 2 }
		],
		"vanityData": {
			"bg": "woods",
			"self": {"id": "winger", "level": 15},
			"enemy": {"id": "menza", "level": 13},
			"turns": [
				{"abil": "ice_storm", "power": 26},
				{"abil": "fire_spin", "power": 20},
				{"abil": "sonic_waves", "power": 32},
				{"abil": "magma", "power": 48},
				{"abil": "bubbles", "power": 50}
			]
		},
		"firstBattleData": {
			"bg": "woods",
			"enemy": {"id": "vulfrost", "level": 1},
			"turns": [
				{"abil": "", "power": 26},
                {"abil": "", "power": 18},
                {"abil": "", "power": 30},
                {"abil": "", "power": 22},
                {"abil": "", "power": 28},
                {"abil": "", "power": 21}
			]
		},
		"firstShopRewards": [
			{"name": "levelup_joker", "amount": 1},
			{"name": "discatch", "amount": 1},
			{"name": "can_hellfire", "amount": 1}
		],
		"firstIAPShopRewards": [
			{"name": "levelup_joker", "amount": 1},
			{"name": "atk_pepper", "amount": 1},
			{"name": "can_hellfire", "amount": 1}
		]
	},
	"lootShop": {
		"messages": [
			{
				"id": "from_menu",
				"msg": "I wonder what you'll get!"
			},
			{
				"id": "no_healing_kit",
				"msg": "Need a Healing Kit?"
			},
			{
				"id": "no_levelup_stone",
				"msg": "Need a Dynastone?"
			}
		],
		"products": [
			{
				"id": "bag",
				"title": "LOOT BAG",
				"price": 80,
				"lootTitle": "maycontain",
				"displayRewards": [
					{"icon": "healing_kit", "note": ""},
					{"icon": "discatch", "note": ""},
					{"icon": "levelup_unknown", "note": ""},
					{"icon": "more_items", "note": "MORE!"}
				],
				"loot": [
					{
						"amount": 1,
						"pool": [
							{"id": "discatch", "odds": 5},
							{"id": "healing_kit", "odds": 3}
						]
					},
					{
						"amount": 1,
						"pool": [
							{"id": "levelup_fire", "odds": 1},
							{"id": "levelup_water", "odds": 1},
							{"id": "levelup_earth", "odds": 1}
						]
					},
					{
						"amount": 1,
						"pool": [
							{"id": "heal_spray", "odds": 1},
							{"id": "aim_shroom", "odds": 1},
							{"id": "def_berry", "odds": 1},
							{"id": "atk_pepper", "odds": 1}
						]
					}
				]
			},
			{
				"id": "chest",
				"title": "LOOT CHEST",
				"price": 0,
				"lootTitle": "contains",
				"displayRewards": [
					{"icon": "coins", "note": ""},
					{"icon": "discatch", "note": ""},
					{"icon": "levelup_unknown", "note": ""},
					{"icon": "more_items", "note": "MORE!"}
				],
				"loot": [
					{
						"amount": 1,
						"pool": [
							{"id": "coins", "amount": "50-80", "odds": 100}
						]
					},
					{
						"amount": 1,
						"pool": [
							{"id": "levelup_fire", "odds": 3},
							{"id": "levelup_water", "odds": 3},
							{"id": "levelup_earth", "odds": 3},
							{"id": "levelup_joker", "odds": 1}
						]
					},
					{
						"amount": 1,
						"pool": [
							{"id": "discatch", "odds": 6}
						]
					},
					{
						"amount": 2,
						"pool": [
							{"id": "heal_spray", "odds": 50},
							{"id": "antidote", "odds": 50},
							{"id": "healing_kit", "odds": 50},
							{"id": "aim_shroom", "odds": 40},
							{"id": "def_berry", "odds": 40},
							{"id": "atk_pepper", "odds": 40},
							{"id": "can_rage", "odds": 5},
							{"id": "can_hellfire", "odds": 5},
							{"id": "can_rainbow", "odds": 5},
							{"id": "can_fire_spin", "odds": 5},
							{"id": "can_ice_shield", "odds": 5},
							{"id": "can_water_blast", "odds": 5},
							{"id": "can_poison_gas", "odds": 5}
						]
					}
				]
			}
		]
	},
	"iapShop": {
        "messages": [
            {
                "id": "from_menu",
                "msg": "I wonder what you'll get!"
            },
            {
                "id": "no_healing_kit",
                "msg": "Need a Healing Kit?"
            },
            {
                "id": "no_levelup_stone",
                "msg": "Need a Dynastone?"
            }
        ],
        "products": [
            {
                "id": "bag",
                "category": "chests",
                "title": "FUN BAG",
                "price": 80,
                "displayBox": "chest1",
                "totalItems": 3,
                "atLeastOfThese": 1,
                "displayRewards": [
                    "berry",
                    "mushroom",
                    "pepper"
                ],
                "loot": [
                    {
                        "amount": 1,
                        "pool": [
                            {"id": "aim_shroom", "odds": 10},
                            {"id": "def_berry", "odds": 10},
                            {"id": "atk_pepper", "odds": 10}
                        ]
                    },
                    {
                        "amount": 1,
                        "pool": [
                            {"id": "discatch", "odds": 10},
                            {"id": "healing_kit", "odds": 10},
                            {"id": "levelup_fire", "odds": 7},
                            {"id": "levelup_water", "odds": 7},
                            {"id": "levelup_earth", "odds": 7},
                            {"id": "heal_spray", "odds": 10},
                            {"id": "antidote", "odds": 15},
                            {"id": "aim_shroom", "odds": 10},
                            {"id": "def_berry", "odds": 10},
                            {"id": "atk_pepper", "odds": 10}
                        ]
                    },
                    {
                        "amount": 1,
                        "pool": [
                            {"id": "can_rage", "odds": 5},
                            {"id": "can_ice_shield", "odds": 5},
                            {"id": "can_water_blast", "odds": 5},
                            {"id": "heal_spray", "odds": 15},
                            {"id": "antidote", "odds": 20}
                        ]
                    }
                ]
            },
            {
                "id": "coolchest",
                "category": "chests",
                "title": "COOL CHEST",
                "price": 250,
                "displayBox": "chest2",
                "totalItems": 4,
                "atLeastOfThese": 1,
                "displayRewards": [
                    "dynastone_water",
                    "dynastone_fire",
                    "dynastone_earth",
                    "healing_kit",
                    "discatch"
                ],
                "loot": [
                    {
                        "amount": 1,
                        "pool": [
                            {"id": "aim_shroom", "odds": 10},
                            {"id": "def_berry", "odds": 10},
                            {"id": "atk_pepper", "odds": 10}
                        ]
                    },
                    {
                        "amount": 1,
                        "pool": [
                            {"id": "discatch", "odds": 10},
                            {"id": "healing_kit", "odds": 10},
                            {"id": "levelup_fire", "odds": 6},
                            {"id": "levelup_water", "odds": 6},
                            {"id": "levelup_earth", "odds": 6}
                        ]
                    },
					{
						"amount": 1,
						"pool": [
							{"id": "discatch", "odds": 10},
							{"id": "healing_kit", "odds": 10},
							{"id": "levelup_fire", "odds": 6},
							{"id": "levelup_water", "odds": 6},
							{"id": "levelup_earth", "odds": 6},
							{"id": "heal_spray", "odds": 10},
							{"id": "antidote", "odds": 13},
							{"id": "aim_shroom", "odds": 10},
							{"id": "def_berry", "odds": 10},
							{"id": "atk_pepper", "odds": 10}
						]
					},
					{
						"amount": 1,
						"pool": [
							{"id": "can_rage", "odds": 5},
							{"id": "can_ice_shield", "odds": 5},
							{"id": "can_water_blast", "odds": 5},
							{"id": "heal_spray", "odds": 10},
							{"id": "antidote", "odds": 10}
						]
					}
                ]
            },
            {
                "id": "megachest",
                "category": "chests",
                "title": "MEGACHEST",
                "price": 500,
                "displayBox": "chest2",
                "totalItems": 5,
                "atLeastOfThese": 3,
                "displayRewards": [
                    "omnistone",
                    "dynastone_water",
                    "dynastone_fire",
                    "dynastone_earth",
                    "healing_kit",
                    "discatch"
                ],
                "loot": [
                    {
                        "amount": 1,
                        "pool": [
                            {"id": "discatch", "odds": 80},
                            {"id": "healing_kit", "odds": 40},
                            {"id": "levelup_fire", "odds": 10},
                            {"id": "levelup_water", "odds": 10},
                            {"id": "levelup_earth", "odds": 10},
                            {"id": "levelup_joker", "odds": 10}
                        ]
                    },
                    {
                        "amount": 1,
                        "pool": [
                            {"id": "discatch", "odds": 40},
                            {"id": "healing_kit", "odds": 80},
                            {"id": "levelup_fire", "odds": 10},
                            {"id": "levelup_water", "odds": 10},
                            {"id": "levelup_earth", "odds": 10},
                            {"id": "levelup_joker", "odds": 10}
                        ]
                    },
                    {
                        "amount": 1,
                        "pool": [
                            {"id": "discatch", "odds": 40},
                            {"id": "healing_kit", "odds": 40},
                            {"id": "levelup_fire", "odds": 20},
                            {"id": "levelup_water", "odds": 20},
                            {"id": "levelup_earth", "odds": 20},
                            {"id": "levelup_joker", "odds": 20}
                        ]
                    },
                    {
                        "amount": 1,
                        "pool": [
							{"id": "aim_shroom", "odds": 10},
							{"id": "def_berry", "odds": 10},
							{"id": "atk_pepper", "odds": 10},
							{"id": "heal_spray", "odds": 12},
							{"id": "can_fire_spin", "odds": 15},
							{"id": "can_hellfire", "odds": 15},
							{"id": "can_poison_gas", "odds": 15},
							{"id": "can_rainbow", "odds": 15}
                        ]
                    }
                ]
            },
            {
                "id": "medic",
                "category": "items",
                "title": "MEDIC PACK",
                "price": 320,
                "displayBox": "item",
                "totalItems": 5,
                "displayRewards": [
                    {"icon": "healing_kit", "note": "3"},
                    {"icon": "heal_spray", "note": "1"},
                    {"icon": "antidote", "note": "1"}
                ],
                "loot": [
                    {
                        "amount": 3,
                        "pool": [{"id": "healing_kit", "odds": 10}]
                    },
                    {
                        "amount": 1,
                        "pool": [{"id": "heal_spray", "odds": 10}]
                    },
                    {
                        "amount": 1,
                        "pool": [{"id": "antidote", "odds": 10}]
                    }
                ]
            },
            {
                "id": "catcher",
                "category": "items",
                "title": "CATCHER PACK",
                "price": 400,
                "displayBox": "item",
                "totalItems": 5,
                "displayRewards": [
                    {"icon": "discatch", "note": "2"},
                    {"icon": "can_rage", "note": "1"},
                    {"icon": "can_hellfire", "note": "1"},
                    {"icon": "def_berry", "note": "1"}
                ],
                "loot": [
                    {
                        "amount": 2,
                        "pool": [{"id": "discatch", "odds": 10}]
                    },
                    {
                        "amount": 1,
                        "pool": [{"id": "can_rage", "odds": 10}]
                    },
                    {
                        "amount": 1,
                        "pool": [{"id": "can_hellfire", "odds": 10}]
                    },
                    {
                        "amount": 1,
                        "pool": [{"id": "def_berry", "odds": 10}]
                    }
                ]
            },
            {
                "id": "dynastones",
                "category": "items",
                "title": "TRAINER PACK",
                "price": 450,
                "displayBox": "item",
                "totalItems": 5,
                "displayRewards": [
                    {"icon": "levelup_joker", "note": "2"},
                    {"icon": "levelup_water", "note": "1"},
                    {"icon": "levelup_fire", "note": "1"},
                    {"icon": "levelup_earth", "note": "1"}
                ],
                "loot": [
                    {
                        "amount": 2,
                        "pool": [{"id": "levelup_joker", "odds": 10}]
                    },
                    {
                        "amount": 1,
                        "pool": [{"id": "levelup_water", "odds": 10}]
                    },
                    {
                        "amount": 1,
                        "pool": [{"id": "levelup_fire", "odds": 10}]
                    },
                    {
                        "amount": 1,
                        "pool": [{"id": "levelup_earth", "odds": 10}]
                    }
                ]
            }
        ],
        "coinProducts": [
            {
                "id": "coin_bunch",
                "title": "COIN BUNCH",
                "coins": 70,
                "icon": "coins1",
                "iap": "false"
            },
            {
                "id": "coin_stack",
                "title": "COIN STACK",
                "coins": 450,
                "icon": "coins2",
                "iap": "true"
            },
            {
                "id": "pile_of_coins",
                "title": "PILE OF COINS",
                "coins": 1300,
                "icon": "coins3",
                "iap": "true"
            },
            {
                "id": "pool_of_gold",
                "title": "POOL OF GOLD",
                "coins": 2700,
                "icon": "coins4",
                "iap": "true"
            },
            {
                "id": "gold_bank",
                "title": "GOLD BANK",
                "coins": 5000,
                "icon": "coins5",
                "iap": "true"
            }
        ],
        "soloDiscatches": {
            "price": 500,
            "amount": 3,
            "vidAmount": 1
        }
    },
	"mapData": {
		"mapVisibility": [
			{
                "ifAdvancedTo": 1,
                "scrollable": "true",
                "visible": "a,b",
                "scrollMax": 715
            },
            {
                "ifAdvancedTo": 2,
                "scrollable": "true",
                "visible": "a,b,c,d",
                "scrollMax": 715
            },
            {
                "ifAdvancedTo": 3,
                "scrollable": "true",
                "visible": "a,b,c,d,k,e,dBoss",
                "scrollMax": 1136
            },
            {
                "ifAdvancedTo": 4,
                "scrollable": "true",
                "visible": "a,b,c,d,k,e,l,f,dBoss",
                "scrollMax": 1136
            },
            {
                "ifAdvancedTo": 5,
                "scrollable": "true",
                "visible": "a,b,c,d,k,e,l,f,g,h,i,j,dBoss",
                "scrollMax": 1280
            }
		],
		"battleNodeRatios": [
			{
				"ifAdvancedTo": 1,
				"odds": [
					{"type": "none", "odds": 1},
                    {"type": "wild", "odds": 1},
                    {"type": "captain", "odds": 0}
				]
			},
			{
				"ifAdvancedTo": 2,
				"odds": [
					{"type": "none", "odds": 2},
                    {"type": "wild", "odds": 1},
                    {"type": "captain", "odds": 0}
				]
			},
            {
                "ifAdvancedTo": 3,
                "odds": [
                    {"type": "none", "odds": 7},
                    {"type": "wild", "odds": 3},
                    {"type": "captain", "odds": 1}
                ]
            },
            {
                "ifAdvancedTo": 4,
                "odds": [
                    {"type": "none", "odds": 8},
                    {"type": "wild", "odds": 2},
                    {"type": "captain", "odds": 1}
                ]
            },
            {
                "ifAdvancedTo": 5,
                "odds": [
                    {"type": "none", "odds": 13},
                    {"type": "wild", "odds": 4},
                    {"type": "captain", "odds": 2}
                ]
            }
		],
		"captainTaunts": [
			{
				"name": "kolin",
				"pool": [
					"Wanna fight?",
					"I'm still practicing!",
					"I hope to become a great Captain!"
				]
			},
			{
                "name": "remi",
                "pool": [
                    "Think you can beat me?",
                    "I'm ready to battle!",
					"I've been looking for some competition!"
                ]
            },
			{
                "name": "sofia",
                "pool": [
                    "Are you just going to stand there?",
                    "Alright, bring it on!",
                    "Looking for a battle? I'm in!"
                ]
            },
			{
                "name": "patrik",
                "pool": [
                    "You will lose this one!",
                    "I will enjoy this one!",
                    "Pleasure is all MINE!",
                    "You can still walk away...",
                    "I'll be gentle, I promise..."
                ]
            },
			{
                "name": "nora",
                "pool": [
                    "You again? Prepare for battle!",
                    "Think you're strong enough?",
                    "Get ready for some REAL challenge!"
                ]
            }
		]
	},
	"arenaData": {
		"monLevelDeltas": "1-3",
		"taunts": [
			"You wish to challenge ME?",
			"This is the Arena, prepare yourself!",
			"Arena battles are tough, but worth it!"
		],
		"monTeams": [
			{
				"ifAdvancedTo": 3,
				"teams": [
					["kitnex", "pyropine"],
					["pengu","hydron"],
					["quacko", "grubble"],
					["shellby", "tacofox"],
					["tailton","tuffnut"]
				]
			},
			{
				"ifAdvancedTo": 5,
				"teams": [
					["flarion", "lampion", "aviatos"],
					["menza", "falcano", "hopchop"],
					["shellby", "hydron", "vulfrost"],
					["tailton", "grubble", "tuffnut"],
					["leafrog", "lavapede", "podapod"],
					["kobalt", "hydron", "tailton"],
					["kitnex", "armadigo", "menza"]
				]
			},
			{
				"ifAdvancedTo": 6,
				"teams": [
					["winger", "falcano", "aviatos"],
					["flarion", "lampion", "aviatos"],
					["pumpking", "hydron", "tacofox"],
					["shellby", "lavapede", "grubble"],
					["krimson", "pyropine", "falcano"],
					["malakite", "tacofox", "quacko"],
					["kobalt", "hydron", "tailton"],
					["kobalt", "malakite", "krimson"],
					["hopchop", "quacko", "pengu"]
				]
			}
		],
		"rewards": [
			{
				"ifAdvancedTo": 3,
				"rewardsPool": [
					"coins:120,levelup_joker:1,discatch:1,can_rage:1",
					"coins:130,levelup_joker:1,healing_kit:1,can_poison_gas:1",
					"coins:125,levelup_joker:1,healing_kit:1,can_rainbow:1",
					"coins:120,levelup_joker:2,discatch:1,can_hellfire:1"
				]
			},
			{
				"ifAdvancedTo": 5,
				"rewardsPool": [
                    "coins:120,levelup_joker:1,discatch:2,can_rage:1",
					"coins:130,levelup_joker:1,healing_kit:1,can_poison_gas:1",
					"coins:125,levelup_joker:1,healing_kit:2,can_rainbow:1",
					"coins:120,levelup_joker:1,discatch:1,can_hellfire:1",
					"coins:140,levelup_joker:1,discatch:1,can_fire_spin:1",
					"coins:130,levelup_joker:1,discatch:1,can_ice_shield:1"
                ]
			},
			{
				"ifAdvancedTo": 6,
				"rewardsPool": [
                    "coins:120,levelup_joker:1,discatch:2,can_rage:1",
					"coins:130,levelup_joker:1,healing_kit:1,can_poison_gas:1",
					"coins:125,levelup_joker:1,healing_kit:2,can_rainbow:1",
					"coins:120,levelup_joker:1,discatch:1,can_hellfire:1",
					"coins:140,levelup_joker:1,discatch:1,can_fire_spin:1",
					"coins:130,levelup_joker:2,discatch:1,can_ice_shield:1"
                ]
			}
		]
	},
	"loot": {
		"availLoot": [
			{
				"ifAdvancedTo": 1,
				"loot": [
					{"id": "coins", "odds": 10},
					{"id": "discatch", "odds": 10},
					{"id": "levelup_fire", "odds": 20},
					{"id": "levelup_water", "odds": 20},
					{"id": "levelup_earth", "odds": 20}
				]
			},
			{
				"ifAdvancedTo": 2,
				"loot": [
					{"id": "coins", "odds": 10},
					{"id": "discatch", "odds": 10},
					{"id": "levelup_fire", "odds": 10},
					{"id": "levelup_water", "odds": 10},
					{"id": "levelup_earth", "odds": 10}
				]
			},
			{
				"ifAdvancedTo": 4,
				"loot": [
					{"id": "coins", "odds": 50},
					{"id": "discatch", "odds": 30},
					{"id": "levelup_fire", "odds": 10},
					{"id": "levelup_water", "odds": 10},
					{"id": "levelup_earth", "odds": 10},
					{"id": "healing_kit", "odds": 10}
				]
			},
			{
				"ifAdvancedTo": 6,
				"loot": [
					{"id": "coins", "odds": 30},
					{"id": "discatch", "odds": 20},
					{"id": "levelup_fire", "odds": 10},
					{"id": "levelup_water", "odds": 10},
					{"id": "levelup_earth", "odds": 10},
					{"id": "healing_kit", "odds": 10}
				]
			}
		],
		"wildAmounts": [
			{
				"distFromAdvance": 0,
				"coins": "10-15",
				"getOdds": "1:1"
			},
			{
				"distFromAdvance": 1,
				"coins": "8-15",
				"getOdds": "8:10"
			},
			{
				"distFromAdvance": 2,
				"coins": "7-12",
				"getOdds": "1:2"
			},
			{
				"distFromAdvance": 3,
				"coins": "3-9",
				"getOdds": "1:5"
			}
		],
		"captainAmounts": [
			{
				"distFromAdvance": 0,
				"coins": "16-30",
				"amounts": [
					{"amount": 1, "odds": 100},
					{"amount": 2, "odds": 80},
					{"amount": 3, "odds": 40}
				]
			},
			{
				"distFromAdvance": 1,
				"coins": "13-20",
				"amounts": [
					{"amount": 0, "odds": 10},
					{"amount": 1, "odds": 100},
					{"amount": 2, "odds": 60}
				]
			},
			{
				"distFromAdvance": 2,
				"coins": "5-13",
				"amounts": [
					{"amount": 0, "odds": 1},
					{"amount": 1, "odds": 1}
				]
			}
		]
	},
	"mapPacks": [
		{
			"id": "a",
			"advance": 1,
			"availMons": [
				{"id": "vulfrost", "odds": 1, "levels": "1-2"},
				{"id": "leafrog", "odds": 1, "levels": "1-3"},
				{"id": "lavapede", "odds": 1, "levels": "1-2"}
			],
			"captains": {
				"avail": ["kolin"],
				"monsCount": [
					{"amount": 1, "odds": 5},
					{"amount": 2, "odds": 9},
					{"amount": 3, "odds": 0}
				],
				"levelsFactor": "1-2"
			}
		},
		{
			"id": "b",
			"advance": 2,
			"availMons": [
				{"id": "vulfrost", "odds": 1, "levels": "1-3"},
				{"id": "leafrog", "odds": 1, "levels": "2-3"},
				{"id": "lavapede", "odds": 2, "levels": "2-4"},
				{"id": "podapod", "odds": 1, "levels": "1-3"},
				{"id": "nintoise", "odds": 2, "levels": "2-3"},
				{"id": "menza", "odds": 2, "levels": "2-5"}
			],
            "captains": {
                "avail": ["kolin", "remi"],
                "monsCount": [
                    {"amount": 1, "odds": 4},
                    {"amount": 2, "odds": 8},
                    {"amount": 3, "odds": 1}
                ],
                "levelsFactor": "1-2"
            }
		},
		{
			"id": "c",
			"advance": 2,
			"availMons": [
				{"id": "vulfrost", "odds": 1, "levels": "3-6"},
				{"id": "leafrog", "odds": 1, "levels": "2-5"},
				{"id": "lavapede", "odds": 1, "levels": "4-6"},
				{"id": "podapod", "odds": 2, "levels": "2-5"},
				{"id": "nintoise", "odds": 1, "levels": "5-6"},
				{"id": "menza", "odds": 2, "levels": "3-6"},
				{"id": "rexaroo", "odds": 3, "levels": "3-5"},
				{"id": "grubble", "odds": 3, "levels": "3-6"},
				{"id": "winger", "odds": 3, "levels": "4-6"}
			],
            "captains": {
                "avail": ["remi", "kolin"],
                "monsCount": [
                    {"amount": 1, "odds": 3},
                    {"amount": 2, "odds": 10},
                    {"amount": 3, "odds": 4}
                ],
                "levelsFactor": "1-2"
            }
		},
		{
			"id": "d",
			"advance": 3,
			"availMons": [
				{"id": "vulfrost", "odds": 1, "levels": "4-7"},
				{"id": "armadigo", "odds": 3, "levels": "4-6"},
				{"id": "tailton", "odds": 3, "levels": "3-7"},
				{"id": "podapod", "odds": 2, "levels": "3-6"},
				{"id": "tacofox", "odds": 3, "levels": "4-6"},
				{"id": "menza", "odds": 2, "levels": "3-6"},
				{"id": "rexaroo", "odds": 2, "levels": "4-7"},
				{"id": "grubble", "odds": 2, "levels": "4-6"},
				{"id": "winger", "odds": 2, "levels": "5-7"}
			],
            "captains": {
                "avail": ["remi", "sofia"],
                "monsCount": [
                    {"amount": 1, "odds": 1},
                    {"amount": 2, "odds": 9},
                    {"amount": 3, "odds": 4}
                ],
                "levelsFactor": "1-3"
            }
		},
		{
			"id": "dBoss",
			"advance": 3,
			"availMons": [
				{"id": "vulfrost", "odds": 1, "levels": "4-7"},
				{"id": "armadigo", "odds": 3, "levels": "4-6"},
				{"id": "tailton", "odds": 3, "levels": "3-7"},
				{"id": "podapod", "odds": 2, "levels": "5-7"},
				{"id": "tacofox", "odds": 3, "levels": "4-7"},
				{"id": "menza", "odds": 2, "levels": "3-6"},
				{"id": "rexaroo", "odds": 2, "levels": "4-7"},
				{"id": "grubble", "odds": 2, "levels": "4-6"},
				{"id": "winger", "odds": 2, "levels": "5-7"}
			],
            "captains": {
                "avail": ["remi", "sofia"],
                "monsCount": [
                    {"amount": 1, "odds": 1},
                    {"amount": 2, "odds": 9},
                    {"amount": 3, "odds": 4}
                ],
                "levelsFactor": "1-3"
            }
		},
		{
			"id": "e",
			"advance": 4,
			"availMons": [
				{"id": "duckron", "odds": 4, "levels": "6-7"},
				{"id": "shellby", "odds": 4, "levels": "5-8"},
				{"id": "tailton", "odds": 2, "levels": "6-9"},
				{"id": "shellby", "odds": 2, "levels": "5-7"},
				{"id": "tacofox", "odds": 4, "levels": "4-9"},
				{"id": "rexaroo", "odds": 1, "levels": "4-7"},
				{"id": "kitnex", "odds": 4, "levels": "5-7"},
				{"id": "winger", "odds": 2, "levels": "6-8"}
			],
            "captains": {
                "avail": ["patrik", "sofia"],
                "monsCount": [
                    {"amount": 1, "odds": 1},
                    {"amount": 2, "odds": 9},
                    {"amount": 3, "odds": 5}
                ],
                "levelsFactor": "2-4"
            }
		},
		{
			"id": "f",
			"advance": 5,
			"availMons": [
				{"id": "duckron", "odds": 2, "levels": "7-11"},
				{"id": "armadigo", "odds": 2, "levels": "6-10"},
				{"id": "tailton", "odds": 2, "levels": "5-11"},
				{"id": "shellby", "odds": 2, "levels": "6-12"},
				{"id": "tacofox", "odds": 2, "levels": "5-11"},
				{"id": "pyropine", "odds": 5, "levels": "7-10"},
				{"id": "pumpking", "odds": 5, "levels": "7-11"},
				{"id": "kitnex", "odds": 2, "levels": "5-12"},
				{"id": "hydron", "odds": 5, "levels": "7-11"}
			],
            "captains": {
                "avail": ["patrik", "nora"],
                "monsCount": [
                    {"amount": 1, "odds": 0},
                    {"amount": 2, "odds": 10},
                    {"amount": 3, "odds": 10}
                ],
                "levelsFactor": "2-4"
            }
		},
		{
			"id": "g",
			"advance": 6,
			"availMons": [
				{"id": "duckron", "odds": 3, "levels": "9-12"},
				{"id": "armadigo", "odds": 2, "levels": "8-12"},
				{"id": "pengu", "odds": 5, "levels": "7-11"},
				{"id": "shellby", "odds": 2, "levels": "8-11"},
				{"id": "lampion", "odds": 5, "levels": "10-14"},
				{"id": "pyropine", "odds": 2, "levels": "8-12"},
				{"id": "aviatos", "odds": 5, "levels": "10-14"},
				{"id": "kitnex", "odds": 2, "levels": "9-13"},
				{"id": "hydron", "odds": 2, "levels": "9-13"}
			],
            "captains": {
                "avail": ["patrik", "nora"],
                "monsCount": [
                    {"amount": 1, "odds": 0},
                    {"amount": 2, "odds": 3},
                    {"amount": 3, "odds": 5}
                ],
                "levelsFactor": "2-4"
            }
		},
		{
			"id": "h",
			"advance": 6,
			"availMons": [
				{"id": "duckron", "odds": 3, "levels": "12-16"},
				{"id": "hopchop", "odds": 5, "levels": "13-16"},
				{"id": "pengu", "odds": 3, "levels": "14-16"},
				{"id": "tuffnut", "odds": 5, "levels": "14-17"},
				{"id": "lampion", "odds": 3, "levels": "11-17"},
				{"id": "pyropine", "odds": 2, "levels": "13-16"},
				{"id": "aviatos", "odds": 1, "levels": "14-17"},
				{"id": "jeempy", "odds": 5, "levels": "13-16"},
				{"id": "hydron", "odds": 2, "levels": "12-17"}
			],
            "captains": {
                "avail": ["patrik", "sofia"],
                "monsCount": [
                    {"amount": 1, "odds": 0},
                    {"amount": 2, "odds": 3},
                    {"amount": 3, "odds": 30}
                ],
                "levelsFactor": "2-5"
            }
		},
		{
			"id": "i",
			"advance": 6,
			"availMons": [
				{"id": "duckron", "odds": 1, "levels": "14-17"},
				{"id": "hopchop", "odds": 2, "levels": "15-18"},
				{"id": "quacko", "odds": 5, "levels": "14-17"},
				{"id": "tuffnut", "odds": 3, "levels": "15-17"},
				{"id": "lampion", "odds": 1, "levels": "15-18"},
				{"id": "falcano", "odds": 5, "levels": "14-18"},
				{"id": "aviatos", "odds": 1, "levels": "14-17"},
				{"id": "jeempy", "odds": 2, "levels": "13-16"},
				{"id": "flarion", "odds": 5, "levels": "15-17"}
			],
            "captains": {
                "avail": ["patrik", "sofia"],
                "monsCount": [
                    {"amount": 1, "odds": 0},
                    {"amount": 2, "odds": 1},
                    {"amount": 3, "odds": 11}
                ],
                "levelsFactor": "2-5"
            }
		},
		{
			"id": "j",
			"advance": 6,
			"availMons": [
				{"id": "duckron", "odds": 1, "levels": "16-20"},
				{"id": "hopchop", "odds": 2, "levels": "15-18"},
				{"id": "quacko", "odds": 3, "levels": "14-18"},
				{"id": "tuffnut", "odds": 3, "levels": "15-17"},
				{"id": "lampion", "odds": 1, "levels": "15-18"},
				{"id": "falcano", "odds": 3, "levels": "14-20"},
				{"id": "aviatos", "odds": 1, "levels": "15-19"},
				{"id": "jeempy", "odds": 2, "levels": "16-18"},
				{"id": "flarion", "odds": 3, "levels": "15-20"}
			],
            "captains": {
                "avail": ["patrik", "sofia"],
                "monsCount": [
                    {"amount": 1, "odds": 0},
                    {"amount": 2, "odds": 0},
                    {"amount": 3, "odds": 1}
                ],
                "levelsFactor": "3-6"
            }
		},
		{
			"id": "k",
			"advance": 4,
			"availMons": [
				{"id": "duckron", "odds": 3, "levels": "5-8"},
				{"id": "hopchop", "odds": 2, "levels": "5-9"},
				{"id": "quacko", "odds": 3, "levels": "6-9"},
				{"id": "tuffnut", "odds": 3, "levels": "7-9"},
				{"id": "lampion", "odds": 1, "levels": "6-9"},
				{"id": "falcano", "odds": 3, "levels": "7-10"},
				{"id": "aviatos", "odds": 3, "levels": "6-9"},
				{"id": "tailton", "odds": 2, "levels": "6-9"},
				{"id": "flarion", "odds": 4, "levels": "6-9"}
			],
            "captains": {
                "avail": ["nora", "sofia"],
                "monsCount": [
                    {"amount": 1, "odds": 1},
                    {"amount": 2, "odds": 9},
                    {"amount": 3, "odds": 5}
                ],
                "levelsFactor": "2-4"
            }
		},
		{
			"id": "l",
			"advance": 5,
			"availMons": [
				{"id": "duckron", "odds": 3, "levels": "7-11"},
				{"id": "quacko", "odds": 3, "levels": "7-10"},
				{"id": "pengu", "odds": 3, "levels": "6-10"},
				{"id": "lampion", "odds": 3, "levels": "8-12"},
				{"id": "falcano", "odds": 3, "levels": "7-11"},
				{"id": "aviatos", "odds": 3, "levels": "6-11"},
				{"id": "tailton", "odds": 2, "levels": "7-10"},
				{"id": "flarion", "odds": 4, "levels": "8-12"}
			],
            "captains": {
                "avail": ["remi", "patrik"],
                "monsCount": [
                    {"amount": 1, "odds": 0},
                    {"amount": 2, "odds": 10},
                    {"amount": 3, "odds": 10}
                ],
                "levelsFactor": "1-4"
            }
		}
	],
	"mapNodes": [
		{
			"id": 1,
			"connect": -1,
			"pos": [106, 425],
			"pack": "a",
			"bg": "woods"
		},
		{
			"id": 2,
			"connect": 1,
			"pos": [154, 376],
			"pack": "a",
			"bg": "woods"
		},
		{
			"id": 3,
			"connect": 2,
			"pos": [177, 313],
			"pack": "a",
			"bg": "woods"
		},
		{
			"id": 4,
			"connect": 2,
			"pos": [219, 404],
			"pack": "a",
			"bg": "water"
		},
		{
			"id": 5,
			"connect": 3,
			"pos": [78, 331],
			"pack": "a",
			"bg": "woods",
			"bossBattle": {
				"enemy": "kolin",
				"mons": [
					{"id": "lavapede", "level": 1},
					{"id": "leafrog", "level": 1}
				],
				"reward": [
					{"name": "coins", "amount": 80},
					{"name": "discatch", "amount": 1}
				],
				"taunt": "I'll give you coins if you win!",
				"hideBeforeStep": "JOVANI_TALK_KOLIN"
			},
			"unlocksPack": "b"
		},
		{
			"id": 6,
			"connect": 5,
			"pos": [86, 274],
			"pack": "b",
			"bg": "woods"
		},
		{
			"id": 7,
			"connect": 6,
			"pos": [36, 216],
			"pack": "b",
			"bg": "woods"
		},
		{
			"id": 8,
			"connect": 6,
			"pos": [132, 235],
			"pack": "b",
			"bg": "woods"
		},
		{
			"id": 9,
			"connect": 8,
			"pos": [118, 176],
			"pack": "b",
			"bg": "woods"
		},
		{
			"id": 10,
			"connect": 9,
			"pos": [80, 130],
			"pack": "b",
			"bg": "woods",
			"bossBattle": {
				"enemy": "klyde",
				"mons": [
					{"id": "menza", "level": 3},
					{"id": "rexaroo", "level": 2}
				],
				"reward": [
					{"name": "coins", "amount": 40},
					{"name": "levelup_joker", "amount": 1}
				],
				"taunt": "Let's do this!",
				"hideBeforeStep": "KLYDE_INTRODUCE",
				"dialog_start": "klyde_first_battle_start",
				"dialog_win": "klyde_first_battle_win",
				"dialog_lose": "klyde_first_battle_lose"
			},
			"unlocksPack": "c"
		},
		{
			"id": 11,
			"connect": 8,
			"pos": [192, 200],
			"pack": "c",
			"bg": "woods"
		},
		{
			"id": 12,
			"connect": 11,
			"pos": [263, 198],
			"pack": "c",
			"bg": "woods"
		},
		{
			"id": 13,
			"connect": 12,
			"pos": [335, 205],
			"pack": "c",
			"bg": "woods",
			"bossBattle": {
				"enemy": "nora",
				"mons": [
					{"id": "armadigo", "level": 3},
					{"id": "kitnex", "level": 2},
					{"id": "hydron", "level": 3}
				],
				"reward": [
					{"name": "coins", "amount": 45},
					{"name": "heal_spray", "amount": 1},
					{"name": "discatch", "amount": 1}
				],
				"taunt": "Going to the ARENA? Beat me first!",
				"dialog_win": "arena_pack_unlocked"
			},
			"unlocksPack": "d"
		},
		{
			"id": 14,
			"connect": 12,
			"pos": [254, 260],
			"pack": "c",
			"bg": "woods"
		},
		{
			"id": 15,
			"connect": 14,
			"pos": [315, 291],
			"pack": "c",
			"bg": "woods"
		},
		{
			"id": 16,
			"connect": 13,
			"pos": [392, 179],
			"pack": "d",
			"bg": "woods"
		},
		{
			"id": 17,
			"connect": 19,
			"pos": [472, 256],
			"pack": "d",
			"bg": "water"
		},
		{
			"id": 18,
			"connect": 17,
			"pos": [397, 271],
			"pack": "dBoss",
			"bg": "water",
			"bossBattle": {
				"enemy": "jenni",
				"mons": [
					{"id": "winger", "level": 4},
					{"id": "pengu", "level": 5},
					{"id": "tuffnut", "level": 3}
				],
				"reward": [
					{"name": "coins", "amount": 50},
					{"name": "def_berry", "amount": 1},
					{"name": "levelup_fire", "amount": 1}
				],
				"taunt": "Dynamons are SO cute, right?",
				"hideBeforePack": "dBoss"
			},
			"unlocksPack": "e"
		},
		{
			"id": 19,
			"connect": 16,
			"pos": [472, 205],
			"pack": "d",
			"bg": "woods"
		},
		{
			"id": 20,
			"connect": 19,
			"pos": [471, 145],
			"pack": "d",
			"bg": "arena",
			"arenaBattle": "true",
			"arenaDialogs": {
				"dialog_win": "arena_first_battle_win"
			},
			"unlocksPack": "dBoss"
		},
		{
			"id": 21,
			"connect": 18,
			"pos": [449, 315],
			"pack": "e",
			"bg": "water"
		},
		{
			"id": 22,
			"connect": 21,
			"pos": [374, 400],
			"pack": "e",
			"bg": "water",
			"alsoAvailMons": [
                {"id": "kobalt", "odds": 9, "levels": "10-15", "onlyFor": "wild"}
            ]
		},
		{
			"id": 23,
			"connect": 21,
			"pos": [526, 315],
			"pack": "e",
			"bg": "water"
		},
		{
			"id": 24,
			"connect": 23,
			"pos": [595, 350],
			"pack": "e",
			"bg": "water"
		},
		{
			"id": 25,
			"connect": 24,
			"pos": [530, 406],
			"pack": "e",
			"bg": "water",
			"bossBattle": {
				"enemy": "shelldon",
				"mons": [
					{"id": "shellby", "level": 4},
					{"id": "shellby", "level": 4},
					{"id": "shellby", "level": 5}
				],
				"reward": [
					{"name": "coins", "amount": 55},
					{"name": "levelup_water", "amount": 1},
					{"name": "atk_pepper", "amount": 1}
				],
				"taunt": "SHELLBY IS THE BEST DYNAMON!"
			}
		},
		{
			"id": 26,
			"connect": 24,
			"pos": [671, 440],
			"pack": "e",
			"bg": "water"
		},
		{
			"id": 27,
			"connect": 26,
			"pos": [738, 394],
			"pack": "e",
			"bg": "water"
		},
		{
			"id": 28,
			"connect": 17,
			"pos": [568, 259],
			"pack": "dBoss",
			"bg": "water",
			"bossBattle": {
				"enemy": "zak",
				"mons": [
					{"id": "pyropine", "level": 6},
					{"id": "tailton", "level": 5},
					{"id": "nintoise", "level": 6}
				],
				"reward": [
					{"name": "coins", "amount": 55},
					{"name": "heal_spray", "amount": 1},
					{"name": "aim_shroom", "amount": 1},
					{"name": "levelup_earth", "amount": 1}
				],
				"taunt": "I'll fight you HARD!",
				"hideBeforePack": "dBoss"
			},
			"unlocksPack": "k"
		},
		{
			"id": 29,
			"connect": 28,
			"pos": [641, 211],
			"pack": "k",
			"bg": "woods"
		},
		{
			"id": 30,
			"connect": 29,
			"pos": [561, 177],
			"pack": "k",
			"bg": "woods"
		},
		{
			"id": 31,
			"connect": 30,
			"pos": [566, 103],
			"pack": "k",
			"bg": "woods",
			"alsoAvailMons": [
                {"id": "malakite", "odds": 9, "levels": "11-16", "onlyFor": "wild"}
            ]
		},
		{
			"id": 32,
			"connect": 28,
			"pos": [642, 281],
			"pack": "k",
			"bg": "water"
		},
		{
			"id": 33,
			"connect": 32,
			"pos": [735, 270],
			"pack": "k",
			"bg": "woods"
		},
		{
			"id": 34,
			"connect": 41,
			"pos": [808, 245],
			"pack": "l",
			"bg": "snow"
		},
		{
			"id": 35,
			"connect": 34,
			"pos": [877, 210],
			"pack": "l",
			"bg": "snow"
		},
		{
			"id": 36,
			"connect": 35,
			"pos": [814, 171],
			"pack": "l",
			"bg": "snow"
		},
		{
			"id": 37,
			"connect": 36,
			"pos": [903, 129],
			"pack": "l",
			"bg": "snow"
		},
		{
			"id": 38,
			"connect": 36,
			"pos": [755, 110],
			"pack": "l",
			"bg": "snow",
			"alsoAvailMons": [
                {"id": "kobalt", "odds": 9, "levels": "13-17", "onlyFor": "wild"}
            ]
		},
		{
			"id": 39,
			"connect": 33,
			"pos": [780, 320],
			"pack": "k",
			"bg": "water",
			"bossBattle": {
				"enemy": "klyde",
				"mons": [
					{"id": "menza", "level": 6},
					{"id": "flarion", "level": 8},
					{"id": "falcano", "level": 8}
				],
				"reward": [
					{"name": "coins", "amount": 55},
					{"name": "discatch", "amount": 1},
					{"name": "levelup_fire", "amount": 1},
					{"name": "antidote", "amount": 1}
				],
				"taunt": "This time you can't win!"
			},
			"unlocksPack": "f"
		},
		{
			"id": 40,
			"connect": 39,
			"pos": [849, 349],
			"pack": "f",
			"bg": "water"
		},
		{
			"id": 41,
			"connect": 40,
			"pos": [849, 284],
			"pack": "f",
			"bg": "water",
			"bossBattle": {
				"enemy": "zak",
				"mons": [
					{"id": "quacko", "level": 7},
					{"id": "pengu", "level": 9},
					{"id": "hopchop", "level": 8}
				],
				"reward": [
					{"name": "coins", "amount": 60},
					{"name": "aim_shroom", "amount": 1},
					{"name": "def_berry", "amount": 1},
					{"name": "atk_pepper", "amount": 1}
				],
				"taunt": "Come at me, I'm READY!"
			},
			"unlocksPack": "l"
		},
		{
			"id": 42,
			"connect": 41,
			"pos": [934, 290],
			"pack": "f",
			"bg": "desert",
			"alsoAvailMons": [
                {"id": "malakite", "odds": 10, "levels": "14-18", "onlyFor": "wild"}
            ]
		},
		{
			"id": 43,
			"connect": 40,
			"pos": [873, 402],
			"pack": "f",
			"bg": "water"
		},
		{
			"id": 44,
			"connect": 43,
			"pos": [951, 395],
			"pack": "f",
			"bg": "desert"
		},
		{
			"id": 45,
			"connect": 44,
			"pos": [1049, 373],
			"pack": "f",
			"bg": "desert",
			"bossBattle": {
				"enemy": "chuk",
				"mons": [
					{"id": "grubble", "level": 10},
					{"id": "armadigo", "level": 13},
					{"id": "nintoise", "level": 11}
				],
				"reward": [
					{"name": "coins", "amount": 60},
					{"name": "can_rage", "amount": 1},
					{"name": "can_poison_gas", "amount": 1}
				],
				"dialog_win": "chuk_battle_win",
				"taunt": "I will crush you!"
			},
			"unlocksPack": "g"
		},
		{
			"id": 46,
			"connect": 45,
			"pos": [1123, 344],
			"pack": "g",
			"bg": "desert"
		},
		{
			"id": 47,
			"connect": 46,
			"pos": [1148, 404],
			"pack": "g",
			"bg": "desert"
		},
		{
			"id": 48,
			"connect": 47,
			"pos": [1077, 452],
			"pack": "g",
			"bg": "desert",
			"alsoAvailMons": [
                {"id": "krimson", "odds": 10, "levels": "17-19", "onlyFor": "wild"}
            ]
		},
		{
			"id": 49,
			"connect": 45,
			"pos": [1032, 316],
			"pack": "g",
			"bg": "desert"
		},
		{
			"id": 50,
			"connect": 49,
			"pos": [1043, 270],
			"pack": "g",
			"bg": "volcano",
			"bossBattle": {
				"enemy": "klyde",
				"mons": [
					{"id": "menza", "level": 13},
					{"id": "flarion", "level": 12},
					{"id": "malakite", "level": 13}
				],
				"reward": [
					{"name": "coins", "amount": 60},
					{"name": "heal_spray", "amount": 1},
					{"name": "antidote", "amount": 1},
					{"name": "levelup_fire", "amount": 1}
				],
				"dialog_win": "klyde_final_battle_win",
				"taunt": "It's now or never!"
			},
			"unlocksPack": "h"
		},
		{
			"id": 51,
			"connect": 50,
			"pos": [1101, 245],
			"pack": "h",
			"bg": "volcano",
			"bossBattle": {
				"enemy": "shelldon",
				"mons": [
					{"id": "shellby", "level": 13},
					{"id": "shellby", "level": 13},
					{"id": "kobalt", "level": 16}
				],
				"reward": [
					{"name": "coins", "amount": 60},
					{"name": "discatch", "amount": 1},
					{"name": "levelup_water", "amount": 1},
					{"name": "def_berry", "amount": 1}
				],
				"dialog_start": "shelldon_final_battle_start",
				"taunt": "PRAISE THE MIGHTY SHELLBY!"
			},
			"unlocksPack": "i"
		},
		{
			"id": 52,
			"connect": 51,
			"pos": [1159, 212],
			"pack": "i",
			"bg": "volcano",
			"bossBattle": {
				"enemy": "manifesto",
				"mons": [
					{"id": "aviatos", "level": 16},
					{"id": "falcano", "level": 16},
					{"id": "krimson", "level": 16}
				],
				"reward": [
					{"name": "coins", "amount": 65},
					{"name": "antidote", "amount": 1},
					{"name": "aim_shroom", "amount": 1},
					{"name": "can_hellfire", "amount": 1}
				],
				"dialog_start": "manifesto_final_battle_start",
				"taunt": "How DARE you?!"
			},
			"unlocksPack": "j"
		},
		{
			"id": 53,
			"connect": 52,
			"pos": [1109, 164],
			"pack": "i",
			"bg": "volcano"
		},
		{
			"id": 54,
			"connect": 53,
			"pos": [1035, 161],
			"pack": "i",
			"bg": "volcano",
			"alsoAvailMons": [
                {"id": "krimson", "odds": 10, "levels": "18-20", "onlyFor": "wild"}
            ]
		},
		{
			"id": 55,
			"connect": 52,
			"pos": [1211, 149],
			"pack": "j",
			"bg": "volcano",
			"bossBattle": {
				"enemy": "sumsum",
				"mons": [
					{"id": "menza", "level": 18},
					{"id": "vulfrost", "level": 18},
					{"id": "tacofox", "level": 19}
				],
				"reward": [
					{"name": "coins", "amount": 65},
					{"name": "heal_spray", "amount": 1},
					{"name": "aim_shroom", "amount": 1},
					{"name": "levelup_joker", "amount": 1}
				],
				"dialog_start": "sumsum_final_battle_start",
				"dialog_win": "sumsum_final_battle_win",
				"dialog_lose": "sumsum_final_battle_lose",
				"taunt": "It all boils down to this."
			}
		},
		{
			"id": 56,
			"connect": 16,
			"pos": [328, 144],
			"pack": "d",
			"bg": "woods"
		}
	],
	"items": [
		{
			"id": "discatch",
			"title": "DISCATCH",
			"desc": "Used to CATCH wild Dynamons",
			"inBattle": "true"
		},
		{
			"id": "levelup_fire",
			"title": "FIRE DYNASTONE",
			"desc": "Used to level up FIRE Dynamons",
			"inBattle": "false"
		},
		{
			"id": "levelup_water",
			"title": "WATER DYNASTONE",
			"desc": "Used to level up WATER Dynamons",
			"inBattle": "false",
			"cost": 1
		},
		{
			"id": "levelup_earth",
			"title": "EARTH DYNASTONE",
			"desc": "Used to level up EARTH Dynamons",
			"inBattle": "false"
		},
		{
			"id": "levelup_joker",
			"title": "OMNISTONE",
			"desc": "Used to level up ANY Dynamon",
			"inBattle": "false"
		},
		{
			"id": "healing_kit",
			"title": "HEALING KIT",
			"desc": "Restores full HEALTH between battles",
			"inBattle": "false"
		},
		{
			"id": "heal_spray",
			"title": "HEAL SPRAY",
			"desc": "Restores some HEALTH during battle",
			"inBattle": "true"
		},
		{
			"id": "antidote",
			"title": "ANTIDOTE SPRAY",
			"desc": "Gets rid of SICK and HYPNO",
			"inBattle": "true"
		},
		{
			"id": "aim_shroom",
			"title": "FOCUS FUNGUS",
			"desc": "Temporarily increases AIMING ability",
			"inBattle": "true"
		},
		{
			"id": "atk_pepper",
			"title": "POWER PEPPER",
			"desc": "Tastes spicy, improves ATTACK ability",
			"inBattle": "true"
		},
		{
			"id": "def_berry",
			"title": "BUNKER BERRY",
			"desc": "Hardens the skin to increase DEFENSE",
			"inBattle": "true"
		},
		{
			"id": "can_rage",
			"title": "CANNED ENRAGE",
			"desc": "Unleashes RAGE, improving next attack",
			"inBattle": "true"
		},
		{
			"id": "can_fire_spin",
			"title": "CANNED FLAME SWIRL",
			"desc": "FLAME SWIRL attack, may cause HYPNO",
			"inBattle": "true"
		},
		{
			"id": "can_hellfire",
			"title": "CANNED HELLFIRE",
			"desc": "Unleashes HELLFIRE, deals great damage",
			"inBattle": "true"
		},
		{
			"id": "can_ice_shield",
			"title": "CANNED ICE SHIELD",
			"desc": "Unleashes ICE SHIELD, improving DEFENSE",
			"inBattle": "true"
		},
		{
			"id": "can_water_blast",
			"title": "CANNED WATER BLAST",
			"desc": "Unleashes a strong WATER BLAST attack",
			"inBattle": "true"
		},
		{
			"id": "can_poison_gas",
			"title": "CANNED POISON GAS",
			"desc": "Unleashes POISON GAS, may cause SICK",
			"inBattle": "true"
		},
		{
			"id": "can_rainbow",
			"title": "CANNED RAINBOW BEAM",
			"desc": "Unleashes a strong RAINBOW BEAM attack",
			"inBattle": "true"
		}
	],
	"battleData": {
		"maxHP": 100,
		"aiming": [
			{"upTo": 10, "miss": "60:100", "crit": "0:100"},
			{"upTo": 20, "miss": "50:100", "crit": "0:100"},
			{"upTo": 30, "miss": "35:100", "crit": "8:100"},
			{"upTo": 40, "miss": "17:100", "crit": "10:100"},
			{"upTo": 50, "miss": "10:100", "crit": "12:100"},
			{"upTo": 60, "miss": "8:100", "crit": "18:100"},
			{"upTo": 70, "miss": "6:100", "crit": "20:100"},
			{"upTo": 80, "miss": "3:100", "crit": "32:100"},
			{"upTo": 90, "miss": "0:100", "crit": "60:100"},
			{"upTo": 100, "miss": "0:100", "crit": "75:100"}
		],
		"missableEffects": [
			"attack", "state_sick", "state_hypno", "decr_atk", "decr_def", "decr_aim"
		],
		"missVisualSteps": [
            {"at": 0, "action": "ram:actor", "duration": 400, "inHypno": "none"},
            {"at": 100, "action": "sfx-miss", "duration": 300, "inHypno": "none"},
            {"at": 100, "action": "evade:other", "duration": 300, "inHypno": "none"}
        ],
        "hypnoBackfireChance": "1:2",
        "sickDamage": 6,
		"critFactor": 1.5,
		"kindFactors": {
			"strong": 1.2,
			"weak": 0.8,
			"normal": 1
		},
		"rageFactor": 2,
		"xpData": [
			{"delta": 5, "xp": 40},
			{"delta": 4, "xp": 30},
			{"delta": 3, "xp": 30},
			{"delta": 2, "xp": 20},
			{"delta": 1, "xp": 15},
			{"delta": 0, "xp": 10},
			{"delta": -1, "xp": 7},
			{"delta": -2, "xp": 5},
			{"delta": -3, "xp": 5},
			{"delta": -4, "xp": 5},
			{"delta": -5, "xp": 2}
		]
	},
	"monLevels": [
		{"level": 1, "healTime": "0:0:1"},
		{"level": 2, "healTime": "0:0:1"},
		{"level": 3, "healTime": "0:0:1"},
		{"level": 4, "healTime": "0:1:0"},
		{"level": 5, "healTime": "0:1:0"},
		{"level": 6, "healTime": "0:5:0"},
		{"level": 7, "healTime": "0:10:0"},
		{"level": 8, "healTime": "0:30:0"},
		{"level": 9, "healTime": "1:0:0"},
		{"level": 10, "healTime": "1:40:0"},
		{"level": 11, "healTime": "2:0:0"},
		{"level": 12, "healTime": "2:0:0"},
		{"level": 13, "healTime": "2:30:0"},
		{"level": 14, "healTime": "4:0:0"},
		{"level": 15, "healTime": "7:0:0"},
		{"level": 16, "healTime": "7:50:0"},
		{"level": 17, "healTime": "8:0:0"},
		{"level": 18, "healTime": "8:0:0"},
		{"level": 19, "healTime": "8:0:0"},
		{"level": 20, "healTime": "8:0:0"}
	],
	"mons": [
		{
			"id": "armadigo",
			"title": "ARMADIGO",
			"desc": "Armadigos may use|their drills to dig into|Earth's boiling center.",
			"kind": "fire",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.25, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.15, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.2, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 20, "def": 23, "aim": 41},
				{"lvl": 2, "xp": 10, "atk": 23, "def": 26, "aim": 43},
				{"lvl": 3, "xp": 20, "atk": 26, "def": 30, "aim": 44},
				{"lvl": 4, "xp": 30, "atk": 29, "def": 33, "aim": 46},
				{"lvl": 5, "xp": 35, "atk": 31, "def": 35, "aim": 47},
				{"lvl": 6, "xp": 45, "atk": 33, "def": 38, "aim": 47},
				{"lvl": 7, "xp": 55, "atk": 35, "def": 40, "aim": 48},
				{"lvl": 8, "xp": 70, "atk": 37, "def": 42, "aim": 49},
				{"lvl": 9, "xp": 70, "atk": 39, "def": 44, "aim": 50},
				{"lvl": 10, "xp": 70, "atk": 41, "def": 47, "aim": 50},
				{"lvl": 11, "xp": 75, "atk": 44, "def": 50, "aim": 51},
				{"lvl": 12, "xp": 75, "atk": 47, "def": 54, "aim": 52},
				{"lvl": 13, "xp": 75, "atk": 50, "def": 57, "aim": 53},
				{"lvl": 14, "xp": 75, "atk": 52, "def": 60, "aim": 54},
				{"lvl": 15, "xp": 75, "atk": 56, "def": 65, "aim": 55},
				{"lvl": 16, "xp": 80, "atk": 60, "def": 70, "aim": 56},
				{"lvl": 17, "xp": 80, "atk": 64, "def": 74, "aim": 57},
				{"lvl": 18, "xp": 100, "atk": 69, "def": 80, "aim": 58},
				{"lvl": 19, "xp": 100, "atk": 74, "def": 86, "aim": 59},
				{"lvl": 20, "xp": 100, "atk": 80, "def": 92, "aim": 60}
			],
			"abilities": [
				{"id": "scratch", "index": 0, "getsAt": 1},
				{"id": "rain_fire", "index": 1, "getsAt": 4},
				{"id": "heatwave", "index": 2, "getsAt": 7},
				{"id": "magma", "index": 3, "getsAt": 13},
				{"id": "volcano", "index": 1, "getsAt": 16},
				{"id": "fire_spin", "index": 2, "getsAt": 16}
			]
		},
		{
			"id": "falcano",
			"title": "FALCANO",
			"desc": "Flying near active|volcanos, Falcanos|enjoy diving in lava.",
			"kind": "fire",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.25, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.15, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.2, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 23, "def": 19, "aim": 42},
				{"lvl": 2, "xp": 10, "atk": 27, "def": 21, "aim": 43},
				{"lvl": 3, "xp": 20, "atk": 30, "def": 24, "aim": 45},
				{"lvl": 4, "xp": 30, "atk": 34, "def": 27, "aim": 46},
				{"lvl": 5, "xp": 35, "atk": 36, "def": 29, "aim": 47},
				{"lvl": 6, "xp": 45, "atk": 39, "def": 31, "aim": 48},
				{"lvl": 7, "xp": 55, "atk": 41, "def": 33, "aim": 49},
				{"lvl": 8, "xp": 70, "atk": 43, "def": 34, "aim": 49},
				{"lvl": 9, "xp": 70, "atk": 46, "def": 36, "aim": 50},
				{"lvl": 10, "xp": 70, "atk": 48, "def": 38, "aim": 51},
				{"lvl": 11, "xp": 75, "atk": 51, "def": 41, "aim": 52},
				{"lvl": 12, "xp": 75, "atk": 55, "def": 44, "aim": 53},
				{"lvl": 13, "xp": 75, "atk": 59, "def": 47, "aim": 53},
				{"lvl": 14, "xp": 75, "atk": 62, "def": 49, "aim": 54},
				{"lvl": 15, "xp": 75, "atk": 67, "def": 53, "aim": 55},
				{"lvl": 16, "xp": 80, "atk": 71, "def": 57, "aim": 56},
				{"lvl": 17, "xp": 80, "atk": 76, "def": 60, "aim": 57},
				{"lvl": 18, "xp": 100, "atk": 82, "def": 65, "aim": 58},
				{"lvl": 19, "xp": 100, "atk": 88, "def": 70, "aim": 59},
				{"lvl": 20, "xp": 100, "atk": 95, "def": 75, "aim": 50}
			],
			"abilities": [
				{"id": "scratch", "index": 0, "getsAt": 1},
				{"id": "heatwave", "index": 1, "getsAt": 6},
				{"id": "rage", "index": 2, "getsAt": 14},
				{"id": "hellfire", "index": 3, "getsAt": 19}
			]
		},
		{
			"id": "flarion",
			"title": "FLARION",
			"desc": "Rare to be seen,|Flarion's tail is|made of pure fire.",
			"kind": "fire",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.8, "odds": 0}, {"at": 0.4, "odds": 0.5}]},
				{"fromLvl": 7, "data": [{"at": 0.8, "odds": 0}, {"at": 0.25, "odds": 0.5}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 26, "def": 22, "aim": 42},
				{"lvl": 2, "xp": 10, "atk": 30, "def": 25, "aim": 44},
				{"lvl": 3, "xp": 20, "atk": 33, "def": 28, "aim": 45},
				{"lvl": 4, "xp": 30, "atk": 37, "def": 32, "aim": 47},
				{"lvl": 5, "xp": 40, "atk": 40, "def": 34, "aim": 47},
				{"lvl": 6, "xp": 45, "atk": 42, "def": 36, "aim": 48},
				{"lvl": 7, "xp": 55, "atk": 45, "def": 38, "aim": 49},
				{"lvl": 8, "xp": 70, "atk": 48, "def": 40, "aim": 50},
				{"lvl": 9, "xp": 70, "atk": 50, "def": 42, "aim": 50},
				{"lvl": 10, "xp": 70, "atk": 53, "def": 45, "aim": 51},
				{"lvl": 11, "xp": 75, "atk": 57, "def": 48, "aim": 52},
				{"lvl": 12, "xp": 75, "atk": 60, "def": 51, "aim": 53},
				{"lvl": 13, "xp": 75, "atk": 64, "def": 54, "aim": 54},
				{"lvl": 14, "xp": 75, "atk": 68, "def": 58, "aim": 55},
				{"lvl": 15, "xp": 75, "atk": 73, "def": 62, "aim": 56},
				{"lvl": 16, "xp": 80, "atk": 79, "def": 66, "aim": 57},
				{"lvl": 17, "xp": 80, "atk": 84, "def": 71, "aim": 58},
				{"lvl": 18, "xp": 100, "atk": 90, "def": 76, "aim": 59},
				{"lvl": 19, "xp": 100, "atk": 97, "def": 82, "aim": 60},
				{"lvl": 20, "xp": 100, "atk": 104, "def": 88, "aim": 60}
			],
			"abilities": [
				{"id": "scratch", "index": 0, "getsAt": 1},
				{"id": "magma", "index": 1, "getsAt": 11},
				{"id": "fire_spin", "index": 2, "getsAt": 15},
				{"id": "hellfire", "index": 3, "getsAt": 19}
			]
		},
        {
             "id": "hopchop",
             "title": "HOPCHOP",
             "desc": "Often seen as cute,|Hopchops may turn|quite dangerous.",
             "kind": "fire",
             "catchOddsRanges": [
             	{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.25, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.15, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.2, "odds": 0.8}]}

             ],
             "lvlTable" : [
                {"lvl": 1, "xp": 0, "atk": 20, "def": 20, "aim": 43},
				{"lvl": 2, "xp": 10, "atk": 23, "def": 23, "aim": 44},
				{"lvl": 3, "xp": 20, "atk": 27, "def": 27, "aim": 46},
				{"lvl": 4, "xp": 30, "atk": 30, "def": 30, "aim": 47},
				{"lvl": 5, "xp": 40, "atk": 32, "def": 32, "aim": 48},
				{"lvl": 6, "xp": 45, "atk": 34, "def": 34, "aim": 49},
				{"lvl": 7, "xp": 55, "atk": 36, "def": 36, "aim": 50},
				{"lvl": 8, "xp": 70, "atk": 38, "def": 38, "aim": 51},
				{"lvl": 9, "xp": 70, "atk": 40, "def": 40, "aim": 52},
				{"lvl": 10, "xp": 75, "atk": 42, "def": 42, "aim": 52},
				{"lvl": 11, "xp": 75, "atk": 45, "def": 45, "aim": 53},
				{"lvl": 12, "xp": 75, "atk": 48, "def": 48, "aim": 53},
				{"lvl": 13, "xp": 75, "atk": 51, "def": 51, "aim": 54},
				{"lvl": 14, "xp": 75, "atk": 54, "def": 54, "aim": 55},
				{"lvl": 15, "xp": 75, "atk": 58, "def": 58, "aim": 56},
				{"lvl": 16, "xp": 80, "atk": 62, "def": 62, "aim": 57},
				{"lvl": 17, "xp": 80, "atk": 66, "def": 66, "aim": 58},
				{"lvl": 18, "xp": 100, "atk": 71, "def": 71, "aim": 58},
				{"lvl": 19, "xp": 100, "atk": 77, "def": 77, "aim": 59},
				{"lvl": 20, "xp": 100, "atk": 83, "def": 83, "aim": 60}
             ],
             "abilities": [
                 {"id": "scratch", "index": 0, "getsAt": 1},
                 {"id": "rain_fire", "index": 1, "getsAt": 3},
                 {"id": "confuse", "index": 2, "getsAt": 6},
                 {"id": "volcano", "index": 3, "getsAt": 10},
                 {"id": "enflame", "index": 0, "getsAt": 15},
                 {"id": "fire_spin", "index": 1, "getsAt": 20}
             ]
        },
		{
			"id": "kitnex",
			"title": "SPARKAT",
			"desc": "It is said that looking|into a Sparkat's eyes|may bring bad luck.",
			"kind": "fire",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.25, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.15, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.2, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 22, "def": 18, "aim": 43},
				{"lvl": 2, "xp": 10, "atk": 26, "def": 21, "aim": 45},
				{"lvl": 3, "xp": 20, "atk": 29, "def": 23, "aim": 46},
				{"lvl": 4, "xp": 30, "atk": 32, "def": 26, "aim": 47},
				{"lvl": 5, "xp": 40, "atk": 34, "def": 28, "aim": 48},
				{"lvl": 6, "xp": 45, "atk": 37, "def": 30, "aim": 49},
				{"lvl": 7, "xp": 55, "atk": 39, "def": 32, "aim": 50},
				{"lvl": 8, "xp": 70, "atk": 41, "def": 33, "aim": 51},
				{"lvl": 9, "xp": 70, "atk": 43, "def": 35, "aim": 51},
				{"lvl": 10, "xp": 70, "atk": 46, "def": 37, "aim": 52},
				{"lvl": 11, "xp": 75, "atk": 49, "def": 40, "aim": 53},
				{"lvl": 12, "xp": 75, "atk": 52, "def": 42, "aim": 54},
				{"lvl": 13, "xp": 75, "atk": 56, "def": 45, "aim": 55},
				{"lvl": 14, "xp": 75, "atk": 59, "def": 48, "aim": 56},
				{"lvl": 15, "xp": 75, "atk": 63, "def": 51, "aim": 57},
				{"lvl": 16, "xp": 80, "atk": 68, "def": 55, "aim": 58},
				{"lvl": 17, "xp": 80, "atk": 72, "def": 59, "aim": 59},
				{"lvl": 18, "xp": 100, "atk": 78, "def": 63, "aim": 60},
				{"lvl": 19, "xp": 100, "atk": 83, "def": 68, "aim": 60},
				{"lvl": 20, "xp": 100, "atk": 90, "def": 73, "aim": 60}
			],
			"abilities": [
				 {"id": "scratch", "index": 0, "getsAt": 1},
                 {"id": "heatwave", "index": 1, "getsAt": 3},
                 {"id": "revive", "index": 2, "getsAt": 6},
                 {"id": "magma", "index": 3, "getsAt": 11},
                 {"id": "rage", "index": 2, "getsAt": 19}
			]
		},
		{
			"id": "lavapede",
			"title": "LAVAPEDE",
			"desc": "Despite their small size,|Lavapedes are known|to start forest fires.",
			"kind": "fire",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.35, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.25, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.25, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 21, "def": 19, "aim": 41},
				{"lvl": 2, "xp": 10, "atk": 24, "def": 22, "aim": 43},
				{"lvl": 3, "xp": 20, "atk": 27, "def": 24, "aim": 44},
				{"lvl": 4, "xp": 30, "atk": 31, "def": 27, "aim": 46},
				{"lvl": 5, "xp": 40, "atk": 33, "def": 29, "aim": 46},
				{"lvl": 6, "xp": 45, "atk": 35, "def": 31, "aim": 47},
				{"lvl": 7, "xp": 55, "atk": 37, "def": 33, "aim": 48},
				{"lvl": 8, "xp": 70, "atk": 39, "def": 35, "aim": 49},
				{"lvl": 9, "xp": 70, "atk": 41, "def": 37, "aim": 49},
				{"lvl": 10, "xp": 70, "atk": 43, "def": 39, "aim": 50},
				{"lvl": 11, "xp": 75, "atk": 46, "def": 41, "aim": 51},
				{"lvl": 12, "xp": 75, "atk": 50, "def": 44, "aim": 52},
				{"lvl": 13, "xp": 75, "atk": 53, "def": 47, "aim": 53},
				{"lvl": 14, "xp": 75, "atk": 56, "def": 50, "aim": 54},
				{"lvl": 15, "xp": 75, "atk": 60, "def": 54, "aim": 55},
				{"lvl": 16, "xp": 80, "atk": 64, "def": 57, "aim": 56},
				{"lvl": 17, "xp": 80, "atk": 69, "def": 61, "aim": 56},
				{"lvl": 18, "xp": 100, "atk": 74, "def": 66, "aim": 58},
				{"lvl": 19, "xp": 100, "atk": 79, "def": 71, "aim": 59},
				{"lvl": 20, "xp": 100, "atk": 85, "def": 76, "aim": 60}
			],
			"abilities": [
				 {"id": "sonic_waves", "index": 0, "getsAt": 1},
                 {"id": "rain_fire", "index": 1, "getsAt": 3},
                 {"id": "magma", "index": 2, "getsAt": 6},
                 {"id": "smoke", "index": 3, "getsAt": 10},
                 {"id": "enflame", "index": 1, "getsAt": 14},
                 {"id": "volcano", "index": 0, "getsAt": 18}
			]
		},
		{
			"id": "menza",
			"title": "MENZA",
			"desc": "Lurking on trees,|Menzas are quick to|attack any threat.",
			"kind": "fire",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.25, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.15, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.2, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 23, "def": 20, "aim": 41},
				{"lvl": 2, "xp": 10, "atk": 26, "def": 23, "aim": 43},
				{"lvl": 3, "xp": 20, "atk": 30, "def": 26, "aim": 44},
				{"lvl": 4, "xp": 30, "atk": 33, "def": 29, "aim": 46},
				{"lvl": 5, "xp": 40, "atk": 35, "def": 31, "aim": 47},
				{"lvl": 6, "xp": 45, "atk": 38, "def": 33, "aim": 47},
				{"lvl": 7, "xp": 55, "atk": 40, "def": 35, "aim": 48},
				{"lvl": 8, "xp": 70, "atk": 42, "def": 37, "aim": 49},
				{"lvl": 9, "xp": 70, "atk": 44, "def": 39, "aim": 50},
				{"lvl": 10, "xp": 70, "atk": 47, "def": 41, "aim": 50},
				{"lvl": 11, "xp": 75, "atk": 50, "def": 44, "aim": 51},
				{"lvl": 12, "xp": 75, "atk": 54, "def": 47, "aim": 52},
				{"lvl": 13, "xp": 75, "atk": 57, "def": 50, "aim": 53},
				{"lvl": 14, "xp": 75, "atk": 60, "def": 52, "aim": 54},
				{"lvl": 15, "xp": 75, "atk": 65, "def": 56, "aim": 55},
				{"lvl": 16, "xp": 80, "atk": 70, "def": 60, "aim": 56},
				{"lvl": 17, "xp": 80, "atk": 74, "def": 64, "aim": 57},
				{"lvl": 18, "xp": 100, "atk": 80, "def": 69, "aim": 58},
				{"lvl": 19, "xp": 100, "atk": 86, "def": 74, "aim": 59},
				{"lvl": 20, "xp": 100, "atk": 92, "def": 80, "aim": 60}
			],
			"abilities": [
				{"id": "scratch", "index": 0, "getsAt": 1},
                 {"id": "heatwave", "index": 1, "getsAt": 3},
                 {"id": "magma", "index": 2, "getsAt": 7},
                 {"id": "fire_spin", "index": 3, "getsAt": 11},
                 {"id": "volcano", "index": 1, "getsAt": 17}
			]
		},
		{
			"id": "pyropine",
			"title": "PYROPINE",
			"desc": "The flames on the|Pyropine's back are|usually safe to touch.",
			"kind": "fire",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.25, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.15, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.2, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 22, "def": 20, "aim": 42},
				{"lvl": 2, "xp": 10, "atk": 26, "def": 23, "aim": 43},
				{"lvl": 3, "xp": 20, "atk": 29, "def": 26, "aim": 45},
				{"lvl": 4, "xp": 30, "atk": 32, "def": 29, "aim": 46},
				{"lvl": 5, "xp": 40, "atk": 34, "def": 31, "aim": 47},
				{"lvl": 6, "xp": 45, "atk": 37, "def": 33, "aim": 48},
				{"lvl": 7, "xp": 55, "atk": 39, "def": 35, "aim": 49},
				{"lvl": 8, "xp": 70, "atk": 41, "def": 37, "aim": 50},
				{"lvl": 9, "xp": 70, "atk": 43, "def": 39, "aim": 50},
				{"lvl": 10, "xp": 70, "atk": 46, "def": 41, "aim": 51},
				{"lvl": 11, "xp": 75, "atk": 49, "def": 44, "aim": 52},
				{"lvl": 12, "xp": 75, "atk": 52, "def": 47, "aim": 53},
				{"lvl": 13, "xp": 75, "atk": 56, "def": 50, "aim": 53},
				{"lvl": 14, "xp": 75, "atk": 59, "def": 52, "aim": 54},
				{"lvl": 15, "xp": 75, "atk": 63, "def": 56, "aim": 55},
				{"lvl": 16, "xp": 80, "atk": 68, "def": 60, "aim": 56},
				{"lvl": 17, "xp": 80, "atk": 72, "def": 64, "aim": 57},
				{"lvl": 18, "xp": 100, "atk": 78, "def": 69, "aim": 58},
				{"lvl": 19, "xp": 100, "atk": 83, "def": 74, "aim": 59},
				{"lvl": 20, "xp": 100, "atk": 90, "def": 80, "aim": 60}
			],
			"abilities": [
				 {"id": "scratch", "index": 0, "getsAt": 1},
                 {"id": "heatwave", "index": 1, "getsAt": 5},
                 {"id": "enflame", "index": 2, "getsAt": 11},
                 {"id": "volcano", "index": 3, "getsAt": 19}
			]
		},
		{
			"id": "rexaroo",
			"title": "REXAROO",
			"desc": "Rexaroos have a|pocket in their belly|used to hold babies.",
			"kind": "fire",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.25, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.15, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.2, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 22, "def": 20, "aim": 42},
				{"lvl": 2, "xp": 10, "atk": 25, "def": 23, "aim": 43},
				{"lvl": 3, "xp": 20, "atk": 28, "def": 27, "aim": 45},
				{"lvl": 4, "xp": 30, "atk": 31, "def": 36, "aim": 46},
				{"lvl": 5, "xp": 40, "atk": 33, "def": 32, "aim": 47},
				{"lvl": 6, "xp": 45, "atk": 36, "def": 34, "aim": 48},
				{"lvl": 7, "xp": 55, "atk": 38, "def": 36, "aim": 49},
				{"lvl": 8, "xp": 70, "atk": 40, "def": 38, "aim": 49},
				{"lvl": 9, "xp": 70, "atk": 42, "def": 40, "aim": 50},
				{"lvl": 10, "xp": 70, "atk": 44, "def": 42, "aim": 51},
				{"lvl": 11, "xp": 75, "atk": 48, "def": 45, "aim": 52},
				{"lvl": 12, "xp": 75, "atk": 51, "def": 48, "aim": 53},
				{"lvl": 13, "xp": 75, "atk": 54, "def": 51, "aim": 53},
				{"lvl": 14, "xp": 75, "atk": 57, "def": 54, "aim": 54},
				{"lvl": 15, "xp": 75, "atk": 62, "def": 58, "aim": 55},
				{"lvl": 16, "xp": 80, "atk": 66, "def": 62, "aim": 56},
				{"lvl": 17, "xp": 80, "atk": 70, "def": 66, "aim": 57},
				{"lvl": 18, "xp": 100, "atk": 76, "def": 71, "aim": 58},
				{"lvl": 19, "xp": 100, "atk": 81, "def": 77, "aim": 59},
				{"lvl": 20, "xp": 100, "atk": 87, "def": 83, "aim": 60}
			],
			"abilities": [
				{"id": "sonic_waves", "index": 0, "getsAt": 1},
                 {"id": "rain_fire", "index": 1, "getsAt": 3},
                 {"id": "smoke", "index": 2, "getsAt": 6},
                 {"id": "magma", "index": 3, "getsAt": 11},
                 {"id": "volcano", "index": 1, "getsAt": 18}
			]
		},
		{
			"id": "krimson",
			"title": "KRIMSON",
			"desc": "Krimson, the Fire|Dragon. Some say his|breath can melt rocks.",
			"kind": "fire",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0}, {"at": 0.1, "odds": 0.66}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 10, "def": 10, "aim": 10},
				{"lvl": 2, "xp": 10, "atk": 10, "def": 10, "aim": 10},
				{"lvl": 3, "xp": 20, "atk": 10, "def": 10, "aim": 10},
				{"lvl": 4, "xp": 30, "atk": 10, "def": 10, "aim": 10},
				{"lvl": 5, "xp": 40, "atk": 10, "def": 10, "aim": 10},
				{"lvl": 6, "xp": 45, "atk": 10, "def": 10, "aim": 10},
				{"lvl": 7, "xp": 55, "atk": 50, "def": 46, "aim": 49},
				{"lvl": 8, "xp": 70, "atk": 53, "def": 48, "aim": 49},
				{"lvl": 9, "xp": 70, "atk": 56, "def": 51, "aim": 50},
				{"lvl": 10, "xp": 70, "atk": 59, "def": 53, "aim": 50},
				{"lvl": 11, "xp": 75, "atk": 63, "def": 57, "aim": 51},
				{"lvl": 12, "xp": 75, "atk": 68, "def": 61, "aim": 52},
				{"lvl": 13, "xp": 75, "atk": 72, "def": 65, "aim": 53},
				{"lvl": 14, "xp": 75, "atk": 76, "def": 69, "aim": 54},
				{"lvl": 15, "xp": 75, "atk": 82, "def": 74, "aim": 55},
				{"lvl": 16, "xp": 80, "atk": 88, "def": 79, "aim": 56},
				{"lvl": 17, "xp": 80, "atk": 94, "def": 84, "aim": 57},
				{"lvl": 18, "xp": 100, "atk": 101, "def": 91, "aim": 58},
				{"lvl": 19, "xp": 100, "atk": 108, "def": 97, "aim": 59},
				{"lvl": 20, "xp": 100, "atk": 117, "def": 105, "aim": 60}
			],
			"abilities": [
				 {"id": "sonic_waves", "index": 0, "getsAt": 1},
				 {"id": "scratch", "index": 1, "getsAt": 1},
				 {"id": "heatwave", "index": 0, "getsAt": 2},
				 {"id": "hellfire", "index": 1, "getsAt": 9},
                 {"id": "volcano", "index": 2, "getsAt": 9},
                 {"id": "fire_spin", "index": 3, "getsAt": 18}
			]
		},
		{
			"id": "aviatos",
			"title": "AVIATOS",
			"desc": "Many songs were|written about Aviatos,|Guardian of Woods.",
			"kind": "earth",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.8, "odds": 0}, {"at": 0.4, "odds": 0.5}]},
				{"fromLvl": 7, "data": [{"at": 0.8, "odds": 0}, {"at": 0.25, "odds": 0.5}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 24, "def": 22, "aim": 43},
				{"lvl": 2, "xp": 10, "atk": 27, "def": 25, "aim": 45},
				{"lvl": 3, "xp": 20, "atk": 31, "def": 28, "aim": 46},
				{"lvl": 4, "xp": 30, "atk": 34, "def": 32, "aim": 48},
				{"lvl": 5, "xp": 40, "atk": 37, "def": 34, "aim": 49},
				{"lvl": 6, "xp": 45, "atk": 39, "def": 36, "aim": 50},
				{"lvl": 7, "xp": 55, "atk": 42, "def": 38, "aim": 50},
				{"lvl": 8, "xp": 70, "atk": 44, "def": 40, "aim": 51},
				{"lvl": 9, "xp": 70, "atk": 46, "def": 42, "aim": 52},
				{"lvl": 10, "xp": 70, "atk": 49, "def": 45, "aim": 52},
				{"lvl": 11, "xp": 75, "atk": 52, "def": 48, "aim": 53},
				{"lvl": 12, "xp": 75, "atk": 56, "def": 51, "aim": 54},
				{"lvl": 13, "xp": 75, "atk": 59, "def": 54, "aim": 55},
				{"lvl": 14, "xp": 75, "atk": 63, "def": 58, "aim": 56},
				{"lvl": 15, "xp": 75, "atk": 68, "def": 62, "aim": 57},
				{"lvl": 16, "xp": 80, "atk": 72, "def": 66, "aim": 58},
				{"lvl": 17, "xp": 80, "atk": 77, "def": 71, "aim": 59},
				{"lvl": 18, "xp": 100, "atk": 83, "def": 76, "aim": 60},
				{"lvl": 19, "xp": 100, "atk": 89, "def": 82, "aim": 60},
				{"lvl": 20, "xp": 100, "atk": 96, "def": 88, "aim": 60}
			],
			"abilities": [
				{"id": "scratch", "index": 0, "getsAt": 1},
				{"id": "flash", "index": 1, "getsAt": 1},
				{"id": "boulders", "index": 2, "getsAt": 6},
				{"id": "poison_gas", "index": 0, "getsAt": 12},
				{"id": "spores", "index": 3, "getsAt": 19}
			]
		},
		{
			"id": "grubble",
			"title": "GRUBBLE",
			"desc": "Many people confuse|this bug Dynamon|with a plain stone.",
			"kind": "earth",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.35, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.25, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.25, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 21, "def": 21, "aim": 40},
				{"lvl": 2, "xp": 10, "atk": 24, "def": 24, "aim": 42},
				{"lvl": 3, "xp": 20, "atk": 27, "def": 27, "aim": 43},
				{"lvl": 4, "xp": 30, "atk": 30, "def": 31, "aim": 44},
				{"lvl": 5, "xp": 40, "atk": 32, "def": 33, "aim": 45},
				{"lvl": 6, "xp": 45, "atk": 34, "def": 35, "aim": 46},
				{"lvl": 7, "xp": 55, "atk": 36, "def": 37, "aim": 47},
				{"lvl": 8, "xp": 70, "atk": 38, "def": 39, "aim": 47},
				{"lvl": 9, "xp": 70, "atk": 40, "def": 41, "aim": 48},
				{"lvl": 10, "xp": 70, "atk": 42, "def": 43, "aim": 49},
				{"lvl": 11, "xp": 75, "atk": 45, "def": 46, "aim": 50},
				{"lvl": 12, "xp": 75, "atk": 48, "def": 50, "aim": 50},
				{"lvl": 13, "xp": 75, "atk": 51, "def": 53, "aim": 51},
				{"lvl": 14, "xp": 75, "atk": 54, "def": 56, "aim": 52},
				{"lvl": 15, "xp": 75, "atk": 58, "def": 60, "aim": 53},
				{"lvl": 16, "xp": 80, "atk": 63, "def": 64, "aim": 54},
				{"lvl": 17, "xp": 80, "atk": 67, "def": 69, "aim": 55},
				{"lvl": 18, "xp": 100, "atk": 72, "def": 74, "aim": 56},
				{"lvl": 19, "xp": 100, "atk": 77, "def": 79, "aim": 57},
				{"lvl": 20, "xp": 100, "atk": 83, "def": 85, "aim": 58}
			],
			"abilities": [
				{"id": "sonic_waves", "index": 0, "getsAt": 1},
				{"id": "boulders", "index": 1, "getsAt": 6},
				{"id": "earth_shield", "index": 2, "getsAt": 10},
				{"id": "poison_gas", "index": 3, "getsAt": 15},
				{"id": "spores", "index": 0, "getsAt": 20}
			]
		},
		{
			"id": "jeempy",
			"title": "JEEMPY",
			"desc": "Commonly found on|green hills, Jeempys|feed on grass.",
			"kind": "earth",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.35, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.25, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.25, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 19, "def": 19, "aim": 42},
				{"lvl": 2, "xp": 10, "atk": 22, "def": 22, "aim": 44},
				{"lvl": 3, "xp": 20, "atk": 24, "def": 25, "aim": 45},
				{"lvl": 4, "xp": 30, "atk": 27, "def": 28, "aim": 47},
				{"lvl": 5, "xp": 40, "atk": 29, "def": 30, "aim": 48},
				{"lvl": 6, "xp": 45, "atk": 31, "def": 32, "aim": 48},
				{"lvl": 7, "xp": 55, "atk": 33, "def": 34, "aim": 49},
				{"lvl": 8, "xp": 70, "atk": 35, "def": 36, "aim": 50},
				{"lvl": 9, "xp": 70, "atk": 37, "def": 38, "aim": 51},
				{"lvl": 10, "xp": 70, "atk": 39, "def": 40, "aim": 51},
				{"lvl": 11, "xp": 75, "atk": 41, "def": 43, "aim": 52},
				{"lvl": 12, "xp": 75, "atk": 44, "def": 46, "aim": 53},
				{"lvl": 13, "xp": 75, "atk": 47, "def": 48, "aim": 54},
				{"lvl": 14, "xp": 75, "atk": 50, "def": 51, "aim": 55},
				{"lvl": 15, "xp": 75, "atk": 54, "def": 55, "aim": 56},
				{"lvl": 16, "xp": 80, "atk": 57, "def": 59, "aim": 57},
				{"lvl": 17, "xp": 80, "atk": 61, "def": 63, "aim": 58},
				{"lvl": 18, "xp": 100, "atk": 66, "def": 68, "aim": 59},
				{"lvl": 19, "xp": 100, "atk": 71, "def": 73, "aim": 60},
				{"lvl": 20, "xp": 100, "atk": 76, "def": 78, "aim": 60}
			],
			"abilities": [
				{"id": "scratch", "index": 0, "getsAt": 1},
				{"id": "double_whip", "index": 1, "getsAt": 6},
				{"id": "leaf_strike", "index": 2, "getsAt": 9},
				{"id": "poison_gas", "index": 3, "getsAt": 14},
				{"id": "confuse", "index": 0, "getsAt": 19}
			]
		},
		{
			"id": "leafrog",
			"title": "LEAFROG",
			"desc": "Leafrogs like wet areas,|allowing their leaves|to grow healthy.",
			"kind": "earth",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.35, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.25, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.25, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 18, "def": 19, "aim": 43},
				{"lvl": 2, "xp": 10, "atk": 21, "def": 22, "aim": 44},
				{"lvl": 3, "xp": 20, "atk": 24, "def": 25, "aim": 46},
				{"lvl": 4, "xp": 30, "atk": 26, "def": 28, "aim": 47},
				{"lvl": 5, "xp": 40, "atk": 28, "def": 30, "aim": 48},
				{"lvl": 6, "xp": 45, "atk": 30, "def": 32, "aim": 49},
				{"lvl": 7, "xp": 55, "atk": 32, "def": 34, "aim": 50},
				{"lvl": 8, "xp": 70, "atk": 34, "def": 36, "aim": 50},
				{"lvl": 9, "xp": 70, "atk": 36, "def": 38, "aim": 51},
				{"lvl": 10, "xp": 70, "atk": 37, "def": 40, "aim": 52},
				{"lvl": 11, "xp": 75, "atk": 40, "def": 43, "aim": 53},
				{"lvl": 12, "xp": 75, "atk": 43, "def": 46, "aim": 54},
				{"lvl": 13, "xp": 75, "atk": 46, "def": 48, "aim": 55},
				{"lvl": 14, "xp": 75, "atk": 48, "def": 51, "aim": 55},
				{"lvl": 15, "xp": 75, "atk": 52, "def": 55, "aim": 56},
				{"lvl": 16, "xp": 80, "atk": 56, "def": 59, "aim": 57},
				{"lvl": 17, "xp": 80, "atk": 59, "def": 63, "aim": 58},
				{"lvl": 18, "xp": 100, "atk": 64, "def": 68, "aim": 59},
				{"lvl": 19, "xp": 100, "atk": 68, "def": 73, "aim": 60},
				{"lvl": 20, "xp": 100, "atk": 74, "def": 78, "aim": 60}
			],
			"abilities": [
				{"id": "sonic_waves", "index": 0, "getsAt": 1},
				{"id": "leaf_strike", "index": 1, "getsAt": 3},
				{"id": "double_whip", "index": 2, "getsAt": 6},
				{"id": "earth_shield", "index": 3, "getsAt": 10},
				{"id": "rainbow", "index": 0, "getsAt": 14},
				{"id": "confuse", "index": 1, "getsAt": 19}
			]
		},
		{
			"id": "nintoise",
			"title": "NINTOISE",
			"desc": "Nintoise shells are|known as one of the|hardest materials.",
			"kind": "earth",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.25, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.15, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.2, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 19, "def": 23, "aim": 42},
				{"lvl": 2, "xp": 10, "atk": 22, "def": 26, "aim": 43},
				{"lvl": 3, "xp": 20, "atk": 25, "def": 30, "aim": 45},
				{"lvl": 4, "xp": 30, "atk": 28, "def": 33, "aim": 46},
				{"lvl": 5, "xp": 40, "atk": 30, "def": 35, "aim": 47},
				{"lvl": 6, "xp": 45, "atk": 32, "def": 38, "aim": 48},
				{"lvl": 7, "xp": 55, "atk": 34, "def": 40, "aim": 49},
				{"lvl": 8, "xp": 70, "atk": 36, "def": 42, "aim": 49},
				{"lvl": 9, "xp": 70, "atk": 37, "def": 44, "aim": 50},
				{"lvl": 10, "xp": 70, "atk": 39, "def": 47, "aim": 51},
				{"lvl": 11, "xp": 75, "atk": 42, "def": 50, "aim": 52},
				{"lvl": 12, "xp": 75, "atk": 45, "def": 54, "aim": 53},
				{"lvl": 13, "xp": 75, "atk": 48, "def": 57, "aim": 53},
				{"lvl": 14, "xp": 75, "atk": 51, "def": 60, "aim": 54},
				{"lvl": 15, "xp": 75, "atk": 55, "def": 65, "aim": 55},
				{"lvl": 16, "xp": 80, "atk": 59, "def": 70, "aim": 56},
				{"lvl": 17, "xp": 80, "atk": 62, "def": 74, "aim": 57},
				{"lvl": 18, "xp": 100, "atk": 67, "def": 80, "aim": 58},
				{"lvl": 19, "xp": 100, "atk": 72, "def": 86, "aim": 59},
				{"lvl": 20, "xp": 100, "atk": 78, "def": 92, "aim": 60}
			],
			"abilities": [
				{"id": "scratch", "index": 0, "getsAt": 1},
				{"id": "double_whip", "index": 1, "getsAt": 4},
				{"id": "strangle", "index": 2, "getsAt": 9},
				{"id": "flash", "index": 3, "getsAt": 14},
				{"id": "spores", "index": 0, "getsAt": 20}
			]
		},
		{
			"id": "pumpking",
			"title": "PUMPKING",
			"desc": "Pumpkings carry babies|on their head like a|royal crown.",
			"kind": "earth",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.25, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.15, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.2, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 19, "def": 22, "aim": 43},
				{"lvl": 2, "xp": 10, "atk": 21, "def": 26, "aim": 44},
				{"lvl": 3, "xp": 20, "atk": 24, "def": 29, "aim": 46},
				{"lvl": 4, "xp": 30, "atk": 27, "def": 32, "aim": 47},
				{"lvl": 5, "xp": 40, "atk": 29, "def": 34, "aim": 48},
				{"lvl": 6, "xp": 45, "atk": 31, "def": 37, "aim": 49},
				{"lvl": 7, "xp": 55, "atk": 33, "def": 39, "aim": 50},
				{"lvl": 8, "xp": 70, "atk": 34, "def": 41, "aim": 50},
				{"lvl": 9, "xp": 70, "atk": 36, "def": 43, "aim": 51},
				{"lvl": 10, "xp": 70, "atk": 38, "def": 46, "aim": 52},
				{"lvl": 11, "xp": 75, "atk": 41, "def": 49, "aim": 53},
				{"lvl": 12, "xp": 75, "atk": 44, "def": 52, "aim": 54},
				{"lvl": 13, "xp": 75, "atk": 47, "def": 56, "aim": 54},
				{"lvl": 14, "xp": 75, "atk": 49, "def": 59, "aim": 55},
				{"lvl": 15, "xp": 75, "atk": 53, "def": 63, "aim": 56},
				{"lvl": 16, "xp": 80, "atk": 57, "def": 68, "aim": 57},
				{"lvl": 17, "xp": 80, "atk": 60, "def": 72, "aim": 58},
				{"lvl": 18, "xp": 100, "atk": 65, "def": 78, "aim": 59},
				{"lvl": 19, "xp": 100, "atk": 70, "def": 83, "aim": 60},
				{"lvl": 20, "xp": 100, "atk": 75, "def": 90, "aim": 60}
			],
			"abilities": [
				{"id": "sonic_waves", "index": 0, "getsAt": 1},
				{"id": "boulders", "index": 1, "getsAt": 5},
				{"id": "earth_shield", "index": 2, "getsAt": 10},
				{"id": "spores", "index": 3, "getsAt": 18}
			]
		},
		{
			"id": "quacko",
			"title": "QUACKO",
			"desc": "Quackos fly using|their big leaf to escape|cold season.",
			"kind": "earth",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.25, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.15, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.2, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 20, "def": 20, "aim": 43},
				{"lvl": 2, "xp": 10, "atk": 23, "def": 23, "aim": 44},
				{"lvl": 3, "xp": 20, "atk": 27, "def": 27, "aim": 46},
				{"lvl": 4, "xp": 30, "atk": 30, "def": 30, "aim": 47},
				{"lvl": 5, "xp": 40, "atk": 32, "def": 32, "aim": 48},
				{"lvl": 6, "xp": 45, "atk": 34, "def": 34, "aim": 49},
				{"lvl": 7, "xp": 55, "atk": 36, "def": 36, "aim": 50},
				{"lvl": 8, "xp": 70, "atk": 38, "def": 38, "aim": 51},
				{"lvl": 9, "xp": 70, "atk": 40, "def": 40, "aim": 52},
				{"lvl": 10, "xp": 70, "atk": 42, "def": 42, "aim": 52},
				{"lvl": 11, "xp": 75, "atk": 45, "def": 45, "aim": 53},
				{"lvl": 12, "xp": 75, "atk": 48, "def": 48, "aim": 53},
				{"lvl": 13, "xp": 75, "atk": 51, "def": 51, "aim": 54},
				{"lvl": 14, "xp": 75, "atk": 54, "def": 54, "aim": 55},
				{"lvl": 15, "xp": 75, "atk": 58, "def": 58, "aim": 56},
				{"lvl": 16, "xp": 80, "atk": 62, "def": 62, "aim": 57},
				{"lvl": 17, "xp": 80, "atk": 66, "def": 66, "aim": 58},
				{"lvl": 18, "xp": 100, "atk": 71, "def": 71, "aim": 58},
				{"lvl": 19, "xp": 100, "atk": 77, "def": 77, "aim": 59},
				{"lvl": 20, "xp": 100, "atk": 83, "def": 83, "aim": 60}
			],
			"abilities": [
				{"id": "sonic_waves", "index": 0, "getsAt": 1},
				{"id": "leaf_strike", "index": 1, "getsAt": 3},
				{"id": "double_whip", "index": 2, "getsAt": 6},
				{"id": "strangle", "index": 3, "getsAt": 10},
				{"id": "confuse", "index": 0, "getsAt": 15},
				{"id": "rainbow", "index": 1, "getsAt": 20}
			]
		},
		{
			"id": "tacofox",
			"title": "FENECORN",
			"desc": "Hiding in tall grass,|Fenecorns are very|quick and friendly.",
			"kind": "earth",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.25, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.15, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.2, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 20, "def": 21, "aim": 43},
				{"lvl": 2, "xp": 10, "atk": 23, "def": 24, "aim": 44},
				{"lvl": 3, "xp": 20, "atk": 26, "def": 27, "aim": 46},
				{"lvl": 4, "xp": 30, "atk": 29, "def": 30, "aim": 47},
				{"lvl": 5, "xp": 40, "atk": 31, "def": 33, "aim": 48},
				{"lvl": 6, "xp": 45, "atk": 33, "def": 35, "aim": 49},
				{"lvl": 7, "xp": 55, "atk": 35, "def": 37, "aim": 50},
				{"lvl": 8, "xp": 70, "atk": 37, "def": 39, "aim": 50},
				{"lvl": 9, "xp": 70, "atk": 39, "def": 41, "aim": 51},
				{"lvl": 10, "xp": 70, "atk": 41, "def": 43, "aim": 52},
				{"lvl": 11, "xp": 75, "atk": 44, "def": 46, "aim": 53},
				{"lvl": 12, "xp": 75, "atk": 47, "def": 49, "aim": 54},
				{"lvl": 13, "xp": 75, "atk": 50, "def": 53, "aim": 54},
				{"lvl": 14, "xp": 75, "atk": 52, "def": 56, "aim": 55},
				{"lvl": 15, "xp": 75, "atk": 56, "def": 60, "aim": 56},
				{"lvl": 16, "xp": 80, "atk": 60, "def": 64, "aim": 57},
				{"lvl": 17, "xp": 80, "atk": 64, "def": 68, "aim": 58},
				{"lvl": 18, "xp": 100, "atk": 69, "def": 74, "aim": 59},
				{"lvl": 19, "xp": 100, "atk": 74, "def": 79, "aim": 60},
				{"lvl": 20, "xp": 100, "atk": 80, "def": 85, "aim": 60}
			],
			"abilities": [
				{"id": "scratch", "index": 0, "getsAt": 1},
				{"id": "leaf_strike", "index": 1, "getsAt": 4},
				{"id": "rage", "index": 2, "getsAt": 7},
				{"id": "spores", "index": 3, "getsAt": 11},
				{"id": "boulders", "index": 1, "getsAt": 15},
				{"id": "rainbow", "index": 0, "getsAt": 20}
			]
		},
		{
			"id": "tuffnut",
			"title": "TUFFNUT",
			"desc": "When fully grown,|the Tuffnut's cup can|be harder than a rock.",
			"kind": "earth",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.25, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.15, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.2, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 20, "def": 22, "aim": 42},
				{"lvl": 2, "xp": 10, "atk": 23, "def": 26, "aim": 43},
				{"lvl": 3, "xp": 20, "atk": 26, "def": 29, "aim": 45},
				{"lvl": 4, "xp": 30, "atk": 29, "def": 32, "aim": 46},
				{"lvl": 5, "xp": 40, "atk": 31, "def": 34, "aim": 47},
				{"lvl": 6, "xp": 45, "atk": 33, "def": 37, "aim": 48},
				{"lvl": 7, "xp": 55, "atk": 35, "def": 39, "aim": 49},
				{"lvl": 8, "xp": 70, "atk": 37, "def": 41, "aim": 49},
				{"lvl": 9, "xp": 70, "atk": 39, "def": 43, "aim": 50},
				{"lvl": 10, "xp": 70, "atk": 41, "def": 46, "aim": 51},
				{"lvl": 11, "xp": 75, "atk": 44, "def": 49, "aim": 52},
				{"lvl": 12, "xp": 75, "atk": 47, "def": 52, "aim": 53},
				{"lvl": 13, "xp": 75, "atk": 50, "def": 56, "aim": 53},
				{"lvl": 14, "xp": 75, "atk": 52, "def": 59, "aim": 54},
				{"lvl": 15, "xp": 75, "atk": 56, "def": 63, "aim": 55},
				{"lvl": 16, "xp": 80, "atk": 60, "def": 68, "aim": 56},
				{"lvl": 17, "xp": 80, "atk": 64, "def": 72, "aim": 57},
				{"lvl": 18, "xp": 100, "atk": 69, "def": 78, "aim": 58},
				{"lvl": 19, "xp": 100, "atk": 74, "def": 83, "aim": 59},
				{"lvl": 20, "xp": 100, "atk": 80, "def": 90, "aim": 60}
			],
			"abilities": [
				{"id": "sonic_waves", "index": 0, "getsAt": 1},
				{"id": "double_whip", "index": 1, "getsAt": 6},
				{"id": "earth_shield", "index": 2, "getsAt": 11},
				{"id": "poison_gas", "index": 3, "getsAt": 17}
			]
		},
		{
			"id": "duckron",
			"title": "DUXEDO",
			"desc": "Duxedos quack at|each other to alert|of nearby enemies.",
			"kind": "water",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.25, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.15, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.2, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 21, "def": 19, "aim": 43},
				{"lvl": 2, "xp": 10, "atk": 24, "def": 22, "aim": 45},
				{"lvl": 3, "xp": 20, "atk": 27, "def": 25, "aim": 46},
				{"lvl": 4, "xp": 30, "atk": 30, "def": 28, "aim": 47},
				{"lvl": 5, "xp": 40, "atk": 33, "def": 30, "aim": 48},
				{"lvl": 6, "xp": 45, "atk": 35, "def": 32, "aim": 49},
				{"lvl": 7, "xp": 55, "atk": 37, "def": 34, "aim": 50},
				{"lvl": 8, "xp": 70, "atk": 39, "def": 36, "aim": 51},
				{"lvl": 9, "xp": 70, "atk": 41, "def": 37, "aim": 51},
				{"lvl": 10, "xp": 70, "atk": 43, "def": 39, "aim": 52},
				{"lvl": 11, "xp": 75, "atk": 46, "def": 42, "aim": 53},
				{"lvl": 12, "xp": 75, "atk": 49, "def": 45, "aim": 54},
				{"lvl": 13, "xp": 75, "atk": 53, "def": 48, "aim": 55},
				{"lvl": 14, "xp": 75, "atk": 56, "def": 51, "aim": 56},
				{"lvl": 15, "xp": 75, "atk": 60, "def": 55, "aim": 57},
				{"lvl": 16, "xp": 80, "atk": 64, "def": 59, "aim": 58},
				{"lvl": 17, "xp": 80, "atk": 68, "def": 62, "aim": 59},
				{"lvl": 18, "xp": 100, "atk": 74, "def": 67, "aim": 60},
				{"lvl": 19, "xp": 100, "atk": 79, "def": 72, "aim": 60},
				{"lvl": 20, "xp": 100, "atk": 85, "def": 78, "aim": 60}
			],
			"abilities": [
				{"id": "sonic_waves", "index": 0, "getsAt": 1},
				{"id": "subzero", "index": 1, "getsAt": 4},
				{"id": "revive", "index": 2, "getsAt": 9},
				{"id": "ice_storm", "index": 3, "getsAt": 18}
			]
		},
		{
			"id": "malakite",
			"title": "MALAKITE",
			"desc": "Malakite, the Earth|Dragon. Legends tell|of his mighty roar.",
			"kind": "earth",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0}, {"at": 0.1, "odds": 0.66}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 10, "def": 10, "aim": 10},
				{"lvl": 2, "xp": 10, "atk": 10, "def": 10, "aim": 10},
				{"lvl": 3, "xp": 20, "atk": 10, "def": 10, "aim": 10},
				{"lvl": 4, "xp": 30, "atk": 10, "def": 10, "aim": 10},
				{"lvl": 5, "xp": 40, "atk": 10, "def": 10, "aim": 10},
				{"lvl": 6, "xp": 45, "atk": 10, "def": 10, "aim": 10},
				{"lvl": 7, "xp": 55, "atk": 48, "def": 53, "aim": 49},
				{"lvl": 8, "xp": 70, "atk": 49, "def": 54, "aim": 49},
				{"lvl": 9, "xp": 70, "atk": 51, "def": 56, "aim": 50},
				{"lvl": 10, "xp": 70, "atk": 53, "def": 59, "aim": 50},
				{"lvl": 11, "xp": 75, "atk": 57, "def": 63, "aim": 51},
				{"lvl": 12, "xp": 75, "atk": 61, "def": 68, "aim": 52},
				{"lvl": 13, "xp": 75, "atk": 65, "def": 72, "aim": 53},
				{"lvl": 14, "xp": 75, "atk": 69, "def": 76, "aim": 54},
				{"lvl": 15, "xp": 75, "atk": 74, "def": 82, "aim": 55},
				{"lvl": 16, "xp": 80, "atk": 79, "def": 88, "aim": 56},
				{"lvl": 17, "xp": 80, "atk": 84, "def": 94, "aim": 57},
				{"lvl": 18, "xp": 100, "atk": 91, "def": 101, "aim": 58},
				{"lvl": 19, "xp": 100, "atk": 97, "def": 108, "aim": 59},
				{"lvl": 20, "xp": 100, "atk": 105, "def": 117, "aim": 60}
			],
			"abilities": [
				{"id": "sonic_waves", "index": 0, "getsAt": 1},
				{"id": "scratch", "index": 1, "getsAt": 1},
				{"id": "leaf_strike", "index": 0, "getsAt": 2},
				{"id": "rainbow", "index": 1, "getsAt": 9},
				{"id": "spores", "index": 2, "getsAt": 9},
				{"id": "poison_gas", "index": 3, "getsAt": 19}
			]
		},
		{
			"id": "hydron",
			"title": "HYDRON",
			"desc": "Swimming underwater,|Hydrons hunt using|their toxic tentacles.",
			"kind": "water",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.25, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.15, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.2, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 23, "def": 19, "aim": 42},
				{"lvl": 2, "xp": 10, "atk": 27, "def": 21, "aim": 43},
				{"lvl": 3, "xp": 20, "atk": 30, "def": 24, "aim": 45},
				{"lvl": 4, "xp": 30, "atk": 34, "def": 27, "aim": 46},
				{"lvl": 5, "xp": 40, "atk": 36, "def": 29, "aim": 47},
				{"lvl": 6, "xp": 45, "atk": 39, "def": 31, "aim": 48},
				{"lvl": 7, "xp": 55, "atk": 41, "def": 33, "aim": 49},
				{"lvl": 8, "xp": 70, "atk": 43, "def": 34, "aim": 49},
				{"lvl": 9, "xp": 70, "atk": 46, "def": 36, "aim": 50},
				{"lvl": 10, "xp": 70, "atk": 48, "def": 38, "aim": 51},
				{"lvl": 11, "xp": 75, "atk": 51, "def": 41, "aim": 52},
				{"lvl": 12, "xp": 75, "atk": 55, "def": 44, "aim": 53},
				{"lvl": 13, "xp": 75, "atk": 59, "def": 47, "aim": 53},
				{"lvl": 14, "xp": 75, "atk": 62, "def": 49, "aim": 54},
				{"lvl": 15, "xp": 75, "atk": 67, "def": 53, "aim": 55},
				{"lvl": 16, "xp": 80, "atk": 71, "def": 57, "aim": 56},
				{"lvl": 17, "xp": 80, "atk": 76, "def": 60, "aim": 57},
				{"lvl": 18, "xp": 100, "atk": 82, "def": 65, "aim": 58},
				{"lvl": 19, "xp": 100, "atk": 88, "def": 70, "aim": 58},
				{"lvl": 20, "xp": 100, "atk": 95, "def": 75, "aim": 60}
			],
			"abilities": [
				{"id": "sonic_waves", "index": 0, "getsAt": 1},
				{"id": "ice_splash", "index": 1, "getsAt": 5},
				{"id": "tentacles", "index": 2, "getsAt": 10},
				{"id": "water_blast", "index": 3, "getsAt": 19}
			]
		},
		{
			"id": "lampion",
			"title": "LAMPION",
			"desc": "Seeing a Lampion|is unusual, as it lives|deep underwater.",
			"kind": "water",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.8, "odds": 0}, {"at": 0.4, "odds": 0.5}]},
				{"fromLvl": 7, "data": [{"at": 0.8, "odds": 0}, {"at": 0.25, "odds": 0.5}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 19, "def": 24, "aim": 44},
				{"lvl": 2, "xp": 10, "atk": 22, "def": 28, "aim": 46},
				{"lvl": 3, "xp": 20, "atk": 25, "def": 32, "aim": 48},
				{"lvl": 4, "xp": 30, "atk": 28, "def": 35, "aim": 49},
				{"lvl": 5, "xp": 40, "atk": 30, "def": 38, "aim": 50},
				{"lvl": 6, "xp": 45, "atk": 32, "def": 40, "aim": 51},
				{"lvl": 7, "xp": 55, "atk": 33, "def": 43, "aim": 52},
				{"lvl": 8, "xp": 70, "atk": 35, "def": 45, "aim": 52},
				{"lvl": 9, "xp": 70, "atk": 37, "def": 48, "aim": 53},
				{"lvl": 10, "xp": 70, "atk": 39, "def": 50, "aim": 54},
				{"lvl": 11, "xp": 75, "atk": 42, "def": 54, "aim": 55},
				{"lvl": 12, "xp": 75, "atk": 45, "def": 57, "aim": 56},
				{"lvl": 13, "xp": 75, "atk": 48, "def": 61, "aim": 57},
				{"lvl": 14, "xp": 75, "atk": 51, "def": 65, "aim": 57},
				{"lvl": 15, "xp": 75, "atk": 55, "def": 70, "aim": 59},
				{"lvl": 16, "xp": 80, "atk": 58, "def": 74, "aim": 60},
				{"lvl": 17, "xp": 80, "atk": 62, "def": 79, "aim": 60},
				{"lvl": 18, "xp": 100, "atk": 67, "def": 85, "aim": 60},
				{"lvl": 19, "xp": 100, "atk": 72, "def": 92, "aim": 60},
				{"lvl": 20, "xp": 100, "atk": 78, "def": 88, "aim": 60}
			],
			"abilities": [
				{"id": "sonic_waves", "index": 0, "getsAt": 1},
				{"id": "ice_splash", "index": 1, "getsAt": 1},
				{"id": "rage", "index": 2, "getsAt": 5},
				{"id": "freeze", "index": 0, "getsAt": 10},
				{"id": "ice_shield", "index": 3, "getsAt": 18}
			]
		},
		{
			"id": "pengu",
			"title": "PENGOO",
			"desc": "Mostly found in cold|places, Pengoos like|to roll in snow.",
			"kind": "water",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.25, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.15, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.2, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 20, "def": 20, "aim": 43},
				{"lvl": 2, "xp": 10, "atk": 23, "def": 23, "aim": 44},
				{"lvl": 3, "xp": 20, "atk": 27, "def": 27, "aim": 46},
				{"lvl": 4, "xp": 30, "atk": 30, "def": 30, "aim": 47},
				{"lvl": 5, "xp": 40, "atk": 32, "def": 32, "aim": 48},
				{"lvl": 6, "xp": 45, "atk": 34, "def": 34, "aim": 49},
				{"lvl": 7, "xp": 55, "atk": 36, "def": 36, "aim": 50},
				{"lvl": 8, "xp": 70, "atk": 38, "def": 38, "aim": 51},
				{"lvl": 9, "xp": 70, "atk": 40, "def": 40, "aim": 52},
				{"lvl": 10, "xp": 70, "atk": 42, "def": 42, "aim": 52},
				{"lvl": 11, "xp": 75, "atk": 45, "def": 45, "aim": 53},
				{"lvl": 12, "xp": 75, "atk": 48, "def": 48, "aim": 53},
				{"lvl": 13, "xp": 75, "atk": 51, "def": 51, "aim": 54},
				{"lvl": 14, "xp": 75, "atk": 54, "def": 54, "aim": 55},
				{"lvl": 15, "xp": 75, "atk": 58, "def": 58, "aim": 56},
				{"lvl": 16, "xp": 80, "atk": 62, "def": 62, "aim": 57},
				{"lvl": 17, "xp": 80, "atk": 66, "def": 66, "aim": 58},
				{"lvl": 18, "xp": 100, "atk": 71, "def": 71, "aim": 58},
				{"lvl": 19, "xp": 100, "atk": 77, "def": 77, "aim": 59},
				{"lvl": 20, "xp": 100, "atk": 83, "def": 83, "aim": 60}
			],
			"abilities": [
				{"id": "sonic_waves", "index": 0, "getsAt": 1},
				{"id": "ice_splash", "index": 1, "getsAt": 3},
				{"id": "flash", "index": 2, "getsAt": 6},
				{"id": "freeze", "index": 3, "getsAt": 10},
				{"id": "subzero", "index": 0, "getsAt": 15},
				{"id": "water_blast", "index": 1, "getsAt": 20}
			]
		},
		{
			"id": "podapod",
			"title": "PODAPOD",
			"desc": "Podapods can use the|water in their bodies|to heal their wounds.",
			"kind": "water",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.35, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.25, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.25, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 18, "def": 21, "aim": 42},
				{"lvl": 2, "xp": 10, "atk": 21, "def": 24, "aim": 43},
				{"lvl": 3, "xp": 20, "atk": 24, "def": 27, "aim": 45},
				{"lvl": 4, "xp": 30, "atk": 26, "def": 31, "aim": 46},
				{"lvl": 5, "xp": 40, "atk": 28, "def": 33, "aim": 47},
				{"lvl": 6, "xp": 45, "atk": 30, "def": 35, "aim": 48},
				{"lvl": 7, "xp": 55, "atk": 32, "def": 37, "aim": 48},
				{"lvl": 8, "xp": 70, "atk": 34, "def": 39, "aim": 49},
				{"lvl": 9, "xp": 70, "atk": 36, "def": 41, "aim": 50},
				{"lvl": 10, "xp": 70, "atk": 37, "def": 43, "aim": 50},
				{"lvl": 11, "xp": 75, "atk": 40, "def": 46, "aim": 51},
				{"lvl": 12, "xp": 75, "atk": 43, "def": 50, "aim": 52},
				{"lvl": 13, "xp": 75, "atk": 46, "def": 53, "aim": 53},
				{"lvl": 14, "xp": 75, "atk": 48, "def": 56, "aim": 54},
				{"lvl": 15, "xp": 75, "atk": 52, "def": 60, "aim": 55},
				{"lvl": 16, "xp": 80, "atk": 56, "def": 64, "aim": 56},
				{"lvl": 17, "xp": 80, "atk": 59, "def": 69, "aim": 57},
				{"lvl": 18, "xp": 100, "atk": 64, "def": 74, "aim": 58},
				{"lvl": 19, "xp": 100, "atk": 68, "def": 79, "aim": 59},
				{"lvl": 20, "xp": 100, "atk": 74, "def": 85, "aim": 60}
			],
			"abilities": [
				{"id": "revive", "index": 0, "getsAt": 1},
				{"id": "bubbles", "index": 1, "getsAt": 3},
				{"id": "freeze", "index": 2, "getsAt": 7},
				{"id": "tentacles", "index": 3, "getsAt": 11},
				{"id": "subzero", "index": 1, "getsAt": 15},
				{"id": "water_blast", "index": 2, "getsAt": 20}
			]
		},
		{
			"id": "shellby",
			"title": "SHELLBY",
			"desc": "Stroking the Shellby's|shell is believed to|bring good fortune.",
			"kind": "water",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.25, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.15, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.2, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 18, "def": 23, "aim": 43},
				{"lvl": 2, "xp": 10, "atk": 21, "def": 26, "aim": 44},
				{"lvl": 3, "xp": 20, "atk": 23, "def": 30, "aim": 46},
				{"lvl": 4, "xp": 30, "atk": 26, "def": 33, "aim": 47},
				{"lvl": 5, "xp": 40, "atk": 28, "def": 35, "aim": 48},
				{"lvl": 6, "xp": 45, "atk": 30, "def": 38, "aim": 49},
				{"lvl": 7, "xp": 55, "atk": 32, "def": 40, "aim": 50},
				{"lvl": 8, "xp": 70, "atk": 33, "def": 42, "aim": 50},
				{"lvl": 9, "xp": 70, "atk": 35, "def": 44, "aim": 51},
				{"lvl": 10, "xp": 70, "atk": 37, "def": 47, "aim": 52},
				{"lvl": 11, "xp": 75, "atk": 40, "def": 50, "aim": 53},
				{"lvl": 12, "xp": 75, "atk": 42, "def": 54, "aim": 54},
				{"lvl": 13, "xp": 75, "atk": 45, "def": 57, "aim": 54},
				{"lvl": 14, "xp": 75, "atk": 48, "def": 60, "aim": 55},
				{"lvl": 15, "xp": 75, "atk": 51, "def": 65, "aim": 56},
				{"lvl": 16, "xp": 80, "atk": 55, "def": 70, "aim": 57},
				{"lvl": 17, "xp": 80, "atk": 59, "def": 74, "aim": 58},
				{"lvl": 18, "xp": 100, "atk": 63, "def": 80, "aim": 59},
				{"lvl": 19, "xp": 100, "atk": 68, "def": 86, "aim": 60},
				{"lvl": 20, "xp": 100, "atk": 73, "def": 92, "aim": 60}
			],
			"abilities": [
				{"id": "sonic_waves", "index": 0, "getsAt": 1},
				{"id": "bubbles", "index": 1, "getsAt": 3},
				{"id": "ice_splash", "index": 2, "getsAt": 6},
				{"id": "flash", "index": 0, "getsAt": 9},
				{"id": "water_blast", "index": 3, "getsAt": 14},
				{"id": "confuse", "index": 1, "getsAt": 18}
			]
		},
		{
			"id": "tailton",
			"title": "TAILTON",
			"desc": "Tailtons spend most|days by soaking their|tails in cold waters.",
			"kind": "water",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.25, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.15, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.2, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 22, "def": 19, "aim": 43},
				{"lvl": 2, "xp": 10, "atk": 25, "def": 22, "aim": 44},
				{"lvl": 3, "xp": 20, "atk": 28, "def": 25, "aim": 46},
				{"lvl": 4, "xp": 30, "atk": 31, "def": 28, "aim": 47},
				{"lvl": 5, "xp": 40, "atk": 33, "def": 30, "aim": 48},
				{"lvl": 6, "xp": 45, "atk": 36, "def": 32, "aim": 49},
				{"lvl": 7, "xp": 55, "atk": 38, "def": 34, "aim": 50},
				{"lvl": 8, "xp": 70, "atk": 40, "def": 36, "aim": 50},
				{"lvl": 9, "xp": 70, "atk": 42, "def": 37, "aim": 51},
				{"lvl": 10, "xp": 70, "atk": 44, "def": 39, "aim": 52},
				{"lvl": 11, "xp": 75, "atk": 48, "def": 42, "aim": 53},
				{"lvl": 12, "xp": 75, "atk": 51, "def": 45, "aim": 54},
				{"lvl": 13, "xp": 75, "atk": 54, "def": 48, "aim": 54},
				{"lvl": 14, "xp": 75, "atk": 57, "def": 51, "aim": 55},
				{"lvl": 15, "xp": 75, "atk": 62, "def": 55, "aim": 56},
				{"lvl": 16, "xp": 80, "atk": 66, "def": 59, "aim": 57},
				{"lvl": 17, "xp": 80, "atk": 70, "def": 62, "aim": 58},
				{"lvl": 18, "xp": 100, "atk": 76, "def": 67, "aim": 59},
				{"lvl": 19, "xp": 100, "atk": 81, "def": 72, "aim": 60},
				{"lvl": 20, "xp": 100, "atk": 87, "def": 78, "aim": 60}
			],
			"abilities": [
				{"id": "sonic_waves", "index": 0, "getsAt": 1},
				{"id": "confuse", "index": 1, "getsAt": 3},
				{"id": "subzero", "index": 2, "getsAt": 6},
				{"id": "ice_shield", "index": 3, "getsAt": 12},
				{"id": "water_blast", "index": 0, "getsAt": 17}
			]
		},
		{
			"id": "vulfrost",
			"title": "VULFROST",
			"desc": "Vulfrosts hide in|forests and signal|the start of winter.",
			"kind": "water",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.25, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.15, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.2, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 23, "def": 19, "aim": 42},
				{"lvl": 2, "xp": 10, "atk": 26, "def": 21, "aim": 44},
				{"lvl": 3, "xp": 20, "atk": 30, "def": 24, "aim": 45},
				{"lvl": 4, "xp": 30, "atk": 33, "def": 27, "aim": 47},
				{"lvl": 5, "xp": 40, "atk": 35, "def": 29, "aim": 48},
				{"lvl": 6, "xp": 45, "atk": 38, "def": 31, "aim": 48},
				{"lvl": 7, "xp": 55, "atk": 40, "def": 33, "aim": 49},
				{"lvl": 8, "xp": 70, "atk": 42, "def": 34, "aim": 50},
				{"lvl": 9, "xp": 70, "atk": 44, "def": 36, "aim": 51},
				{"lvl": 10, "xp": 70, "atk": 47, "def": 38, "aim": 51},
				{"lvl": 11, "xp": 75, "atk": 50, "def": 41, "aim": 52},
				{"lvl": 12, "xp": 75, "atk": 54, "def": 44, "aim": 53},
				{"lvl": 13, "xp": 75, "atk": 57, "def": 47, "aim": 54},
				{"lvl": 14, "xp": 75, "atk": 60, "def": 49, "aim": 55},
				{"lvl": 15, "xp": 75, "atk": 65, "def": 53, "aim": 56},
				{"lvl": 16, "xp": 80, "atk": 70, "def": 57, "aim": 57},
				{"lvl": 17, "xp": 80, "atk": 74, "def": 60, "aim": 58},
				{"lvl": 18, "xp": 100, "atk": 80, "def": 65, "aim": 59},
				{"lvl": 19, "xp": 100, "atk": 86, "def": 70, "aim": 60},
				{"lvl": 20, "xp": 100, "atk": 92, "def": 75, "aim": 60}
			],
			"abilities": [
				{"id": "scratch", "index": 0, "getsAt": 1},
				{"id": "ice_splash", "index": 1, "getsAt": 4},
				{"id": "freeze", "index": 2, "getsAt": 8},
				{"id": "ice_storm", "index": 3, "getsAt": 12},
				{"id": "rage", "index": 0, "getsAt": 17}
			]
		},
		{
			"id": "winger",
			"title": "WINGER",
			"desc": "Flying between trees,|Wingers are active|mostly at night.",
			"kind": "water",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0.5}, {"at": 0.25, "odds": 1}]},
				{"fromLvl": 4, "data": [{"at": 0.8, "odds": 0}, {"at": 0.15, "odds": 0.9}]},
				{"fromLvl": 11, "data": [{"at": 0.8, "odds": 0}, {"at": 0.2, "odds": 0.8}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 21, "def": 22, "aim": 41},
				{"lvl": 2, "xp": 10, "atk": 24, "def": 25, "aim": 43},
				{"lvl": 3, "xp": 20, "atk": 27, "def": 28, "aim": 44},
				{"lvl": 4, "xp": 30, "atk": 30, "def": 31, "aim": 46},
				{"lvl": 5, "xp": 40, "atk": 33, "def": 33, "aim": 47},
				{"lvl": 6, "xp": 45, "atk": 35, "def": 36, "aim": 47},
				{"lvl": 7, "xp": 55, "atk": 37, "def": 38, "aim": 48},
				{"lvl": 8, "xp": 70, "atk": 39, "def": 40, "aim": 49},
				{"lvl": 9, "xp": 70, "atk": 41, "def": 42, "aim": 50},
				{"lvl": 10, "xp": 70, "atk": 43, "def": 44, "aim": 50},
				{"lvl": 11, "xp": 75, "atk": 46, "def": 48, "aim": 51},
				{"lvl": 12, "xp": 75, "atk": 49, "def": 51, "aim": 52},
				{"lvl": 13, "xp": 75, "atk": 53, "def": 54, "aim": 53},
				{"lvl": 14, "xp": 75, "atk": 56, "def": 57, "aim": 54},
				{"lvl": 15, "xp": 75, "atk": 60, "def": 62, "aim": 55},
				{"lvl": 16, "xp": 80, "atk": 64, "def": 66, "aim": 56},
				{"lvl": 17, "xp": 80, "atk": 68, "def": 70, "aim": 57},
				{"lvl": 18, "xp": 100, "atk": 74, "def": 76, "aim": 58},
				{"lvl": 19, "xp": 100, "atk": 79, "def": 81, "aim": 59},
				{"lvl": 20, "xp": 100, "atk": 85, "def": 87, "aim": 60}
			],
			"abilities": [
				{"id": "sonic_waves", "index": 0, "getsAt": 1},
				{"id": "bubbles", "index": 1, "getsAt": 4},
				{"id": "flash", "index": 2, "getsAt": 8},
				{"id": "ice_storm", "index": 3, "getsAt": 13},
				{"id": "freeze", "index": 0, "getsAt": 16},
				{"id": "water_blast", "index": 1, "getsAt": 20}
			]
		},
		{
			"id": "kobalt",
			"title": "KOBALT",
			"desc": "Kobalt, the Water|Dragon. Some believe|he can create oceans.",
			"kind": "water",
			"catchOddsRanges": [
				{"fromLvl": 1, "data": [{"at": 0.5, "odds": 0}, {"at": 0.1, "odds": 0.66}]}
			],
			"lvlTable" : [
				{"lvl": 1, "xp": 0, "atk": 10, "def": 10, "aim": 10},
				{"lvl": 2, "xp": 10, "atk": 10, "def": 10, "aim": 10},
				{"lvl": 3, "xp": 20, "atk": 10, "def": 10, "aim": 10},
				{"lvl": 4, "xp": 30, "atk": 10, "def": 10, "aim": 10},
				{"lvl": 5, "xp": 40, "atk": 10, "def": 10, "aim": 10},
				{"lvl": 6, "xp": 45, "atk": 10, "def": 10, "aim": 10},
				{"lvl": 7, "xp": 55, "atk": 47, "def": 43, "aim": 53},
				{"lvl": 8, "xp": 70, "atk": 48, "def": 43, "aim": 53},
				{"lvl": 9, "xp": 70, "atk": 49, "def": 44, "aim": 54},
				{"lvl": 10, "xp": 70, "atk": 52, "def": 46, "aim": 55},
				{"lvl": 11, "xp": 75, "atk": 55, "def": 49, "aim": 56},
				{"lvl": 12, "xp": 75, "atk": 59, "def": 52, "aim": 57},
				{"lvl": 13, "xp": 75, "atk": 63, "def": 56, "aim": 58},
				{"lvl": 14, "xp": 75, "atk": 67, "def": 59, "aim": 59},
				{"lvl": 15, "xp": 75, "atk": 72, "def": 64, "aim": 60},
				{"lvl": 16, "xp": 80, "atk": 77, "def": 68, "aim": 60},
				{"lvl": 17, "xp": 80, "atk": 82, "def": 73, "aim": 61},
				{"lvl": 18, "xp": 100, "atk": 88, "def": 78, "aim": 62},
				{"lvl": 19, "xp": 100, "atk": 95, "def": 84, "aim": 63},
				{"lvl": 20, "xp": 100, "atk": 102, "def": 90, "aim": 64}
			],
			"abilities": [
				{"id": "sonic_waves", "index": 0, "getsAt": 1},
				{"id": "scratch", "index": 1, "getsAt": 1},
				{"id": "ice_splash", "index": 0, "getsAt": 2},
				{"id": "subzero", "index": 1, "getsAt": 9},
				{"id": "ice_storm", "index": 2, "getsAt": 9},
				{"id": "water_blast", "index": 3, "getsAt": 18}
			]
		}
	],
	"available_effects" : [
		"attack   <- power",
		"heal   <- percent",
		"antidote",
		"state_rage / state_sick / state_hypno   <- state_chance",
		"incr_atk / incr_def / incr_aim / decr_atk / decr_def / decr_aim   <- amount"
	],
	"abilities": [
		{
	        "id": "flash",
	        "title": "FLASH",
	        "desc": "Attacks with a bright light, may cause HYPNO",
	        "kind": "none",
	        "effect": "attack,state_hypno",
	        "state_chance": "1:5",
	        "power": 17,
	        "cooldown": 1,
	        "visualSteps": [
	            {"at": 0, "action": "sfx-flash", "duration": 10},
	            {"at": 0, "action": "ram:actor", "duration": 400, "inHypno": "none"},
	            {"at": 150, "action": "flash", "duration": 1200},
	            {"at": 800, "action": "effect", "duration": 400}
	        ]
	    },
		{
			"id": "scratch",
			"title": "SCRATCH",
			"desc": "Scratches the enemy to deal damage",
			"kind": "none",
			"effect": "attack",
			"power": 18,
			"cooldown": 0,
			"visualSteps": [
				{"at": 0, "action": "ram:actor", "duration": 400, "inHypno": "none"},
				{"at": 200, "action": "recoil:other", "duration": 300, "inHypno": "none"},
				{"at": 250, "action": "fx-scratch", "duration": 300},
				{"at": 250, "action": "sfx-scratch", "duration": 10},
				{"at": 250, "action": "effect", "duration": 80}
			]
		},
		{
			"id": "sonic_waves",
			"title": "SONIC SHOCK",
			"desc": "Attacks with a strong sound wave",
			"kind": "none",
			"effect": "attack",
			"power": 18,
			"cooldown": 0,
			"visualSteps": [
				{"at": 0, "action": "sonic_waves", "duration": 2000, "inHypno": "none"},
				{"at": 100, "action": "sfx-sonic_shock", "duration": 1000, "inHypno": "none"},
				{"at": 400, "action": "shake:other", "duration": 1000},
				{"at": 450, "action": "effect", "duration": 800}
			]
		},
        {
            "id": "revive",
            "title": "REVIVE",
            "desc": "Restores a portion of HEALTH",
            "kind": "none",
            "effect": "heal",
            "percent": 18,
            "cooldown": 0,
            "visualSteps": [
                {"at": 0, "action": "sfx-revive", "duration": 10},
                {"at": 150, "action": "revive", "duration": 2000},
                {"at": 800, "action": "effect", "duration": 1600}
            ]
        },
		{
			"id": "confuse",
			"title": "CONFUSE",
			"desc": "Lowers enemy AIMING, may cause HYPNO",
			"kind": "none",
			"effect": "decr_aim,state_hypno",
            "amount": 25,
            "state_chance": "1:4",
			"cooldown": 2,
			"visualSteps": [
				{"at": 0, "action": "confuse:actor", "duration": 400, "inHypno": "noChange"},
				{"at": 0, "action": "sfx-confuse", "duration": 200},
				{"at": 1100, "action": "shake:other", "duration": 600},
				{"at": 1150, "action": "effect", "duration": 800}
			]
		},
		{
			"id": "rage",
			"title": "ENRAGE",
			"desc": "Builds up RAGE for a stronger next attack",
			"kind": "none",
			"effect": "state_rage",
			"state_chance": "1:1",
			"cooldown": 2,
			"visualSteps": [
				{"at": 0, "action": "fx-rage:actor", "duration": 500, "inHypno": "noChange"},
				{"at": 0, "action": "sfx-enrage", "duration": 500, "inHypno": "noChange"},
				{"at": 500, "action": "effect", "duration": 200}
			]
		},
		{
			"id": "heatwave",
			"title": "FURNACE",
			"desc": "Hot air deals damage and improves ATTACK",
			"kind": "fire",
			"effect": "attack,incr_atk",
			"amount":15,
			"power": 20,
			"cooldown": 2,
			"visualSteps": [
				{"at": 100, "action": "sfx-furnace", "duration": 10},
				{"at": 100, "action": "heatwave", "duration": 2000},
				{"at": 1300, "action": "shake:other", "duration": 700},
				{"at": 1300, "action": "effect", "duration": 700}
			]
		},
		{
			"id": "hellfire",
			"title": "HELLFIRE",
			"desc": "Inflicts damage with a massive fire blast",
			"kind": "fire",
			"effect": "attack",
			"power": 27,
			"cooldown": 2,
			"visualSteps": [
				{"at": 0, "action": "sfx-hellfire", "duration": 10},
				{"at": 50, "action": "fx-fireblast", "duration": 1000},
				{"at": 100, "action": "effect", "duration": 900}
			]
		},
		{
			"id": "smoke",
			"title": "SMOKE SCREEN",
			"desc": "Attacks with clouds of smoke, may cause SICK",
			"kind": "fire",
			"effect": "attack,state_sick",
			"power": 21,
			"state_chance": "1:4",
			"cooldown": 2,
			"visualSteps": [
				{"at": 200, "action": "sfx-smoke_screen", "duration": 10},
				{"at": 200, "action": "fx-smoke", "duration": 1800},
				{"at": 500, "action": "effect", "duration": 2000}
			]
		},
        {
            "id": "volcano",
            "title": "VOLCANO",
            "desc": "Blasts the enemy with an eruption of lava",
            "kind": "fire",
            "effect": "attack",
            "power": 25,
            "cooldown": 2,
            "visualSteps": [
                {"at": 100, "action": "jump:actor", "duration": 400, "inHypno": "noChange"},
           		{"at": 650, "action": "sfx-volcano", "duration": 10},
                {"at": 700, "action": "fx-volcano", "duration": 400},
                {"at": 700, "action": "shake:other", "duration": 500},
                {"at": 800, "action": "effect", "duration": 400}
            ]
        },
		{
			"id": "rain_fire",
			"title": "FIRE STORM",
			"desc": "Deals damage with a rain of fireballs",
			"kind": "fire",
			"effect": "attack",
			"power": 19,
			"cooldown": 1,
			"visualSteps": [
				{"at": 0, "action": "sfx-fire_storm", "duration": 10},
				{"at": 250, "action": "fx-rain_fire", "duration": 400},
				{"at": 500, "action": "shake:other", "duration": 550},
				{"at": 550, "action": "effect", "duration": 550}
			]
		},
        {
            "id": "fire_spin",
            "title": "FLAME SWIRL",
            "desc": "Attacks with spiraling fire, may cause HYPNO",
            "kind": "fire",
            "effect": "attack,state_hypno",
            "power": 24,
            "state_chance": "1:3",
            "cooldown": 2,
            "visualSteps": [
                {"at": 0, "action": "fire_spin", "duration": 800},
                {"at": 100, "action": "sfx-flame_swirl", "duration": 800},
                {"at": 400, "action": "shake:other", "duration": 500},
                {"at": 700, "action": "effect", "duration": 400}
            ]
        },
        {
            "id": "magma",
            "title": "MAGMA ROCKS",
            "desc": "Attacks by throwing magma, reduces DEFENSE",
            "kind": "fire",
            "effect": "attack,decr_def",
            "power": 20,
            "amount": 18,
            "cooldown": 2,
            "visualSteps": [
                 {"at": 0, "action": "magma:other", "duration": 400},
                 {"at": 0, "action": "sfx-boulder_pile", "duration": 400},
				 {"at": 1700, "action": "shake:other", "duration": 400},
				 {"at": 1750, "action": "effect", "duration": 800}
            ]
        },
        {
            "id": "enflame",
            "title": "ENFLAME",
            "desc": "A magical fire that improves ATTACK ability",
            "kind": "fire",
            "effect": "incr_atk",
            "amount": 20,
            "cooldown": 1,
            "visualSteps": [
                {"at": 0, "action": "jump:actor", "duration": 400, "inHypno": "noChange"},
                {"at": 550, "action": "enflame:actor", "duration": 400, "inHypno": "noChange"},
                {"at": 550, "action": "sfx-enflame", "duration": 400, "inHypno": "noChange"},
                {"at": 650, "action": "effect", "duration": 200}
            ]
        },
        {
            "id": "water_blast",
            "title": "WATER BLAST",
            "desc": "Attacks with a powerful water stream",
            "kind": "water",
            "effect": "attack",
            "power": 27,
            "cooldown": 2,
            "visualSteps": [
                {"at": 0, "action": "sfx-water_blast", "duration": 10},
				{"at": 50, "action": "fx-waterblast", "duration": 1000},
				{"at": 100, "action": "effect", "duration": 900}
            ]
        },
		{
			"id": "freeze",
			"title": "FROZEN MIST",
			"desc": "Arctic clouds deal damage and weaken ATTACK",
			"kind": "water",
			"effect": "attack,decr_atk",
			"power": 20,
			"amount": 17,
			"cooldown": 2,
			"visualSteps": [
				{"at": 200, "action": "sfx-smoke_screen", "duration": 10},
				{"at": 200, "action": "fx-freeze", "duration": 1800},
				{"at": 500, "action": "effect", "duration": 2000}
			]
		},
		{
			"id": "tentacles",
			"title": "TENTACLE GRIP",
			"desc": "Charges with toxic tentacles, may cause SICK",
			"kind": "water",
			"effect": "attack,state_sick",
			"power": 19,
			"state_chance": "1:3",
			"cooldown": 2,
			"visualSteps": [
				{"at": 200, "action": "sfx-vine_squeeze", "duration": 10},
				{"at": 200, "action": "grip_tentacle", "duration": 1800},
				{"at": 250, "action": "effect", "duration": 800}
			]
		},
		{
			"id": "ice_splash",
			"title": "ICEBERG",
			"desc": "Attacks with an exploding iceberg",
			"kind": "water",
			"effect": "attack",
			"power": 19,
			"cooldown": 1,
			"visualSteps": [
				{"at": 100, "action": "jump:actor", "duration": 400, "inHypno": "noChange"},
				{"at": 650, "action": "sfx-iceberg", "duration": 10},
				{"at": 700, "action": "fx-icesplash", "duration": 400},
				{"at": 700, "action": "shake:other", "duration": 500},
				{"at": 800, "action": "effect", "duration": 400}
			]
		},
		{
			"id": "ice_storm",
			"title": "BLIZZARD",
			"desc": "Strikes with ice shards and weakens DEFENSE",
			"kind": "water",
			"effect": "attack,decr_def",
			"power": 25,
			"amount": 15,
			"cooldown": 2,
			"visualSteps": [
				{"at": 0, "action": "sfx-blizzard", "duration": 10},
				{"at": 250, "action": "fx-rain_ice", "duration": 400},
				{"at": 500, "action": "shake:other", "duration": 550},
				{"at": 550, "action": "effect", "duration": 550}
			]
		},
		{
			"id": "subzero",
			"title": "WINTER CHILLS",
			"desc": "Cold winds cause damage, improves AIMING",
			"kind": "water",
			"effect": "attack,incr_aim",
			"power": 21,
			"amount": 19,
			"cooldown": 2,
			"visualSteps": [
				{"at": 100, "action": "sfx-winter_chills", "duration": 10},
				{"at": 100, "action": "subzero", "duration": 2000},
				{"at": 1300, "action": "shake:other", "duration": 700},
				{"at": 1300, "action": "effect", "duration": 700}
			]
		},
		{
			"id": "ice_shield",
			"title": "ICE SHIELD",
			"desc": "Improves DEFENSE using a cover of ice",
			"kind": "water",
			"effect": "incr_def",
			"amount": 20,
			"cooldown": 2,
			"visualSteps": [
				{"at": 0, "action": "fx-ice-shield:actor", "duration": 1500, "inHypno": "noChange"},
				{"at": 0, "action": "sfx-rock_shield", "duration": 1500, "inHypno": "noChange"},
				{"at": 1000, "action": "effect", "duration": 200}
			]
		},
		{
			"id": "bubbles",
			"title": "BUBBLE BURST",
			"desc": "Deals damage with powerful bubbles",
			"kind": "water",
			"effect": "attack",
			"power": 18,
			"cooldown": 1,
			"visualSteps": [
				{"at": 0, "action": "bubbles:other", "duration": 1500},
				{"at": 50, "action": "sfx-bubble_burst", "duration": 600},
				{"at": 900, "action": "shake:other", "duration": 600},
				{"at": 950, "action": "effect", "duration": 800}
			]
		},
        {
            "id": "double_whip",
            "title": "JUNGLE WHIP",
            "desc": "Slaps with several vines, weakens DEFENSE",
            "kind": "earth",
            "effect": "attack,decr_def",
            "power": 17,
            "amount": 17,
            "cooldown": 1,
            "visualSteps": [
                {"at": 0, "action": "sfx-jungle_whip", "duration": 10},
                {"at": 0, "action": "fx-whip", "duration": 800},
                {"at": 50, "action": "shake:other", "duration": 750},
                {"at": 250, "action": "effect", "duration": 80}
            ]
        },
        {
            "id": "poison_gas",
            "title": "POISON GAS",
            "desc": "Assaults with gas, may cause SICK",
            "kind": "earth",
            "effect": "attack,state_sick",
            "power": 25,
            "state_chance": "1:3",
            "cooldown": 2,
            "visualSteps": [
                {"at": 200, "action": "sfx-smoke_screen", "duration": 10},
                {"at": 200, "action": "fx-poisongas", "duration": 1800},
                {"at": 500, "action": "effect", "duration": 2000}
            ]
        },
        {
            "id": "strangle",
            "title": "VINE SQUEEZE",
            "desc": "Crushes the enemy with strangling vines",
            "kind": "earth",
            "effect": "attack",
            "power": 21,
            "cooldown": 2,
            "visualSteps": [
                {"at": 200, "action": "sfx-vine_squeeze", "duration": 10},
				{"at": 200, "action": "grip_vine", "duration": 1800},
				{"at": 250, "action": "effect", "duration": 800}
            ]
        },
        {
            "id": "spores",
            "title": "SPORE SHOT",
            "desc": "Attacks by raining spores, may cause HYPNO",
            "kind": "earth",
            "effect": "attack,state_hypno",
            "power": 25,
            "state_chance": "1:3",
            "cooldown": 2,
            "visualSteps": [
				{"at": 100, "action": "fx-rain_pods", "duration": 500},
				{"at": 200, "action": "sfx-spore_shot", "duration": 10},
				{"at": 400, "action": "spore_clouds", "duration": 1900},
				{"at": 450, "action": "effect", "duration": 1400}
            ]
        },
        {
            "id": "leaf_strike",
            "title": "LEAF STRIKE",
            "desc": "Strikes with a burst of sharp leaves",
            "kind": "earth",
            "effect": "attack",
            "power": 18,
            "cooldown": 1,
            "visualSteps": [
                {"at": 0, "action": "sfx-leaf_strike", "duration": 10},
				{"at": 250, "action": "fx-rain_leaf", "duration": 400},
				{"at": 500, "action": "shake:other", "duration": 550},
				{"at": 550, "action": "effect", "duration": 550}
            ]
        },
        {
            "id": "earth_shield",
            "title": "ROCK SHIELD",
            "desc": "Builds a shield of solid rock, rising DEFENSE",
            "kind": "earth",
            "effect": "incr_def",
            "amount": 20,
            "cooldown": 2,
            "visualSteps": [
                {"at": 0, "action": "fx-earth-shield:actor", "duration": 1500, "inHypno": "noChange"},
                {"at": 0, "action": "sfx-rock_shield", "duration": 1000, "inHypno": "noChange"},
                {"at": 1000, "action": "effect", "duration": 200}
            ]
        },
        {
            "id": "rainbow",
            "title": "RAINBOW BEAM",
            "desc": "Sends a blinding attack of light",
            "kind": "earth",
            "effect": "attack",
            "power": 27,
            "cooldown": 2,
            "visualSteps": [
                {"at": 0, "action": "sfx-rainbow_beam", "duration": 10},
				{"at": 50, "action": "fx-rainbow", "duration": 1000},
				{"at": 100, "action": "effect", "duration": 900}
            ]
        },
        {
            "id": "boulders",
            "title": "BOULDER PILE",
            "desc": "Falling boulders deal damage, hurts AIMING",
            "kind": "earth",
            "effect": "attack,decr_aim",
            "power": 20,
            "amount": 16,
            "cooldown": 2,
            "visualSteps": [
                {"at": 0, "action": "boulders:other", "duration": 400},
                {"at": 0, "action": "sfx-boulder_pile", "duration": 400},
                {"at": 1700, "action": "shake:other", "duration": 400},
                {"at": 1750, "action": "effect", "duration": 800}
            ]
        },

		{
			"id": "item-heal_spray",
			"title": "HEAL SPRAY",
			"kind": "none",
			"effect": "heal",
			"percent": 50,
			"cooldown": 1,
			"visualSteps": [
                {"at": 150, "action": "heal_spray:actor", "duration": 3000, "inHypno": "noChange"},
                {"at": 1200, "action": "effect", "duration": 500}
			]
		},
		{
			"id": "item-antidote",
			"title": "ANTIDOTE SPRAY",
			"kind": "none",
            "effect": "antidote",
            "cooldown": 1,
            "visualSteps": [
                {"at": 150, "action": "antidote:actor", "duration": 3000, "inHypno": "noChange"},
                {"at": 1200, "action": "effect", "duration": 500}
            ]
		},
		{
			"id": "item-aim_shroom",
			"title": "FOCUS FUNGUS",
			"kind": "none",
            "effect": "incr_aim",
            "amount": 41,
            "cooldown": 1,
            "visualSteps": [
				{"at": 150, "action": "aim_shroom:actor", "duration": 2000,  "inHypno": "noChange"},
				{"at": 1500, "action": "effect", "duration": 500}
			]
		},
		{
			"id": "item-atk_pepper",
			"title": "POWER PEPPER",
			"kind": "none",
            "effect": "incr_atk",
            "amount": 41,
            "cooldown": 1,
            "visualSteps": [
                {"at": 150, "action": "atk_pepper:actor", "duration": 2000,  "inHypno": "noChange"},
                {"at": 1500, "action": "effect", "duration": 500}
            ]
		},
		{
			"id": "item-def_berry",
			"title": "BUNKER BERRY",
			"kind": "none",
            "effect": "incr_def",
            "amount": 41,
            "cooldown": 1,
            "visualSteps": [
				{"at": 150, "action": "def_berry:actor", "duration": 2000,  "inHypno": "noChange"},
				{"at": 1500, "action": "effect", "duration": 500}
            ]
		},
        {
            "id": "can-rage",
            "title": "ENRAGE",
            "desc": "",
            "kind": "none",
            "effect": "state_rage",
            "state_chance": "1:1",
            "cooldown": 2,
            "visualSteps": [
            	{"at": 0, "action": "can_rage:actor", "duration": 2000},
                {"at": 2500, "action": "fx-rage:actor", "duration": 500, "inHypno": "noChange"},
                {"at": 2500, "action": "sfx-enrage", "duration": 500, "inHypno": "noChange"},
                {"at": 3000, "action": "effect", "duration": 700}
            ]
        },
		{
			"id": "can-fire_spin",
			"title": "FLAME SWIRL",
			"desc": "",
			"kind": "fire",
			"effect": "attack,state_hypno",
			"power": 24,
			"state_chance": "1:3",
			"cooldown": 2,
			"visualSteps": [
				{"at": 0, "action": "can_fire_spin:actor", "duration": 2000},
				{"at": 2500, "action": "fire_spin", "duration": 800},
				{"at": 2600, "action": "sfx-flame_swirl", "duration": 800},
				{"at": 2900, "action": "shake:other", "duration": 500},
				{"at": 2950, "action": "effect", "duration": 800}
			]
		},
        {
            "id": "can-hellfire",
            "title": "HELLFIRE",
            "desc": "",
            "kind": "fire",
            "effect": "attack",
            "power": 27,
            "cooldown": 2,
            "visualSteps": [
                {"at": 0, "action": "can_hellfire:actor", "duration": 1500, "inHypno": "noChange"},
                {"at": 2700, "action": "sfx-hellfire", "duration": 10},
				{"at": 2700, "action": "fx-fireblast", "duration": 1000},
				{"at": 2800, "action": "effect", "duration": 1300}
            ]
        },
        {
            "id": "can-ice_shield",
            "title": "ICE SHIELD",
            "desc": "",
            "kind": "water",
            "effect": "incr_def",
            "amount": 20,
            "cooldown": 2,
            "visualSteps": [
            	{"at": 0, "action": "can_ice_shield:actor", "duration": 1500, "inHypno": "noChange"},
                {"at": 2600, "action": "fx-ice-shield:actor", "duration": 1500, "inHypno": "noChange"},
                {"at": 2600, "action": "sfx-rock_shield", "duration": 1500, "inHypno": "noChange"},
                {"at": 3400, "action": "effect", "duration": 1200}
            ]
        },
		{
			"id": "can-water_blast",
			"title": "WATER BLAST",
			"desc": "",
			"kind": "water",
			"effect": "attack",
			"power": 27,
			"cooldown": 2,
			"visualSteps": [
				{"at": 0, "action": "can_water_blast:actor", "duration": 1500, "inHypno": "noChange"},
				{"at": 2700, "action": "sfx-water_blast", "duration": 10},
				{"at": 2700, "action": "fx-waterblast", "duration": 1000},
				{"at": 2800, "action": "effect", "duration": 1200}
			]
		},
		{
			"id": "can-poison_gas",
			"title": "POISON GAS",
			"desc": "",
			"kind": "earth",
			"effect": "attack,state_sick",
			"power": 25,
			"state_chance": "1:3",
			"cooldown": 2,
			"visualSteps": [
				{"at": 0, "action": "can_poison_gas:actor", "duration": 1500, "inHypno": "noChange"},
				{"at": 2700, "action": "sfx-smoke_screen", "duration": 10},
				{"at": 2700, "action": "fx-poisongas", "duration": 1800},
				{"at": 2900, "action": "effect", "duration": 2000}
			]
		},
		{
			"id": "can-rainbow",
			"title": "RAINBOW BEAM",
			"desc": "",
			"kind": "earth",
			"effect": "attack",
			"power": 27,
			"cooldown": 2,
			"visualSteps": [
			    {"at": 0, "action": "can_rainbow:actor", "duration": 1500, "inHypno": "noChange"},
				{"at": 2700, "action": "sfx-rainbow_beam", "duration": 10},
				{"at": 2700, "action": "fx-rainbow", "duration": 1000},
				{"at": 2800, "action": "effect", "duration": 1200}
			]
		}
	],
	"dialogs": [
		{
			"id": "hello_world",
			"content": [
				{"who": "left:jovani", "text": "Hello, will you become|a Dynamon Captain?"}
			]
		},
		{
			"id": "tutor_good_job",
			"overlay": false,
			"content": [
				{"who": "left:jovani", "text": "NICE! You've got some skills.|Now choose your own Dynamon!"}
			]
		},
		{
			"id": "tutor_choose",
			"overlay": false,
			"content": [
				{"who": "left:jovani", "text": "Splendid choice.|Your Dynamon adventure begins!"}
			]
		},
		{
			"id": "tutor_first_battle",
			"content": [
				{"who": "left:jovani", "text": "Let's find some wild|Dynamons to BATTLE!"}
			]
		},
		{
			"id": "tutor_catch_talk",
			"content": [
				{"who": "left:jovani-hand", "text": "WAIT! Now that it's weak|let's try to CATCH it!"}
			]
		},
		{
			"id": "tutor_level_up",
			"content": [
				{"who": "left:jovani", "text": "WOW! Your Dynamon can LEVEL UP!"},
				{"who": "left:jovani-hand", "text": "We use DYNASTONES to do that.|Use one now!"}
			]
		},
		{
			"id": "tutor_swap_talk",
			"content": [
				{"who": "left:jovani", "text": "You can SWITCH Dynamons during battle."},
				{"who": "left:jovani-hand", "text": "Let's use the Vulfrost you just caught!"}
			]
		},
		{
			"id": "tutor_introduce_kolin",
			"content": [
				{"who": "left:jovani", "text": "Looks like another Captain|is blocking the road..."},
				{"who": "left:jovani-hand", "text": "Go and BATTLE him!"}
			]
		},
		{
			"id": "tutor_open_shop",
			"content": [
				{"who": "left:jovani-hand", "text": "Kolin gave you some COINS.|You can spend them at the SHOP!"}
			]
		},
		{
			"id": "tutor_item_talk",
			"content": [
				{"who": "left:jovani", "text": "You can use ITEMS during battle."},
				{"who": "left:jovani-hand", "text": "Use the Canned Attack you just got!"}
			]
		},
		{
			"id": "tutor_introduce_klyde",
			"content": [
				{"who": "left:klyde", "text": "Greetings, rival Captain!"},
				{"who": "left:klyde", "text": "I'm going to battle in the ARENA|and become the strongest Champion."},
				{"who": "left:klyde", "text": "Come fight me, if you like.|Maybe you could learn a thing or two."}
			]
		},
		{
			"id": "tutor_heal",
			"content": [
				{"who": "left:jovani", "text": "Dynamons can take time to heal..."},
				{"who": "left:jovani-hand", "text": "Use Healing Kits to heal them NOW!"}
			]
		},
		{
			"id": "klyde_first_battle_start",
			"content": [
				{"who": "left:klyde", "text": "Good, you finally came here."},
				{"who": "left:klyde", "text": "My Dynamons could use the practice|before I go to the ARENA battle."}
			]
		},
		{
			"id": "klyde_first_battle_win",
			"content": [
				{"who": "left:klyde", "text": "ARGH! You got lucky.|Next time it won't be that easy!"},
				{"who": "left:sumsum", "text": "..."},
				{"who": "left:sumsum", "text": "I see YOU, young Captain."},
				{"who": "left:sumsum", "text": "I hope to meet you after you|win the ARENA battle..."},
				{"who": "left:sumsum", "text": "... IF you win the ARENA battle."}
			]
		},
		{
			"id": "klyde_first_battle_lose",
			"content": [
				{"who": "left:klyde", "text": "Train harder if you want to be|able to win ARENA battles."},
				{"who": "left:klyde", "text": "I'll be waiting for you here."}
			]
		},
		{
			"id": "arena_pack_unlocked",
			"content": [
				{"who": "left:jovani", "text": "Great, you made it to the ARENA!|Go ahead and challenge the Champion."}
			]
		},
		{
			"id": "chuk_battle_win",
			"content": [
				{"who": "left:sumsum", "text": "I'm waiting for you.|Come meet me after the bridge."}
			]
		},
		{
			"id": "klyde_final_battle_win",
			"content": [
				{"who": "left:klyde", "text": "I give up... You are stronger."},
				{"who": "left:klyde", "text": "Be careful of SUMSUM.|His powers are... DARK!"}
			]
		},
		{
			"id": "shelldon_final_battle_start",
			"content": [
				{"who": "left:sumsum", "text": "You don't stand a CHANCE."}
			]
		},
		{
			"id": "manifesto_final_battle_start",
			"content": [
				{"who": "left:sumsum", "text": "This is your END."}
			]
		},
		{
			"id": "sumsum_final_battle_start",
			"content": [
				{"who": "left:sumsum", "text": "I teach my Dynamons to HATE.|They FEAR me!"}
			]
		},
		{
			"id": "sumsum_final_battle_lose",
			"content": [
				{"who": "left:sumsum", "text": "Your love for Dynamons weakens you.|It's PATHETIC."}
			]
		},
		{
			"id": "sumsum_final_battle_win",
			"content": [
				{"who": "left:sumsum", "text": "What?! IMPOSSIBLE!|You have not seen the last of me!"},
				{"who": "left:jovani", "text": "THAT WAS INCREDIBLE!|Now try to CATCH all Dynamons!"}
			]
		},
		{
			"id": "arena_first_battle_win",
			"content": [
				{"who": "left:jovani", "text": "WOW! That was AMAZING!|Return daily for new ARENA battles!"},
				{"who": "left:sumsum", "text": "..."},
				{"who": "left:sumsum", "text": "Impressive. You've won."},
				{"who": "left:sumsum", "text": "You treat Dynamons with respect.|You care for them."},
				{"who": "left:sumsum", "text": "You are WEAK."},
				{"who": "left:sumsum", "text": "Fighting against me will prove much|more difficult. Come see me..."},
				{"who": "left:sumsum", "text": "... If you DARE."}
			]
		}
	]
}
