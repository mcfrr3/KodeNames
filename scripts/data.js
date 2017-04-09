// English Original Words
var defaultData = ["AFRICA", "AGENT", "AIR", "ALIEN", "ALPS", "AMAZON", "AMBULANCE", "AMERICA", "ANGEL", "ANTARCTICA", "APPLE", "ARM", "ATLANTIS", "AUSTRALIA", "AZTEC", "BACK", "BALL", "BAND", "BANK", "BAR", "BARK", "BAT", "BATTERY", "BEACH", "BEAR", "BEAT", "BED", "BEIJING", "BELL", "BELT", "BERLIN", "BERMUDA", "BERRY", "BILL", "BLOCK", "BOARD", "BOLT", "BOMB", "BOND", "BOOM", "BOOT", "BOTTLE", "BOW", "BOX", "BRIDGE", "BRUSH", "BUCK", "BUFFALO", "BUG", "BUGLE", "BUTTON", "CALF", "CANADA", "CAP", "CAPITAL", "CAR", "CARD", "CARROT", "CASINO", "CAST", "CAT", "CELL", "CENTAUR", "CENTER", "CHAIR", "CHANGE", "CHARGE", "CHECK", "CHEST", "CHICK", "CHINA", "CHOCOLATE", "CHURCH", "CIRCLE", "CLIFF", "CLOAK", "CLUB", "CODE", "COLD", "COMIC", "COMPOUND", "CONCERT", "CONDUCTOR", "CONTRACT", "COOK", "COPPER", "COTTON", "COURT", "COVER", "CRANE", "CRASH", "CRICKET", "CROSS", "CROWN", "CYCLE", "CZECH", "DANCE", "DATE", "DAY", "DEATH", "DECK", "DEGREE", "DIAMOND", "DICE", "DINOSAUR", "DISEASE", "DOCTOR", "DOG", "DRAFT", "DRAGON", "DRESS", "DRILL", "DROP", "DUCK", "DWARF", "EAGLE", "EGYPT", "EMBASSY", "ENGINE", "ENGLAND", "EUROPE", "EYE", "FACE", "FAIR", "FALL", "FAN", "FENCE", "FIELD", "FIGHTER", "FIGURE", "FILE", "FILM", "FIRE", "FISH", "FLUTE", "FLY", "FOOT", "FORCE", "FOREST", "FORK", "FRANCE", "GAME", "GAS", "GENIUS", "GERMANY", "GHOST", "GIANT", "GLASS", "GLOVE", "GOLD", "GRACE", "GRASS", "GREECE", "GREEN", "GROUND", "HAM", "HAND", "HAWK", "HEAD", "HEART", "HELICOPTER", "HIMALAYAS", "HOLE", "HOLLYWOOD", "HONEY", "HOOD", "HOOK", "HORN", "HORSE", "HORSESHOE", "HOSPITAL", "HOTEL", "ICE", "ICE CREAM", "INDIA", "IRON", "IVORY", "JACK", "JAM", "JET", "JUPITER", "KANGAROO", "KETCHUP", "KEY", "KID", "KING", "KIWI", "KNIFE", "KNIGHT", "LAB", "LAP", "LASER", "LAWYER", "LEAD", "LEMON", "LEPRECHAUN", "LIFE", "LIGHT", "LIMOUSINE", "LINE", "LINK", "LION", "LITTER", "LOCH NESS", "LOCK", "LOG", "LONDON", "LUCK", "MAIL", "MAMMOTH", "MAPLE", "MARBLE", "MARCH", "MASS", "MATCH", "MERCURY", "MEXICO", "MICROSCOPE", "MILLIONAIRE", "MINE", "MINT", "MISSILE", "MODEL", "MOLE", "MOON", "MOSCOW", "MOUNT", "MOUSE", "MOUTH", "MUG", "NAIL", "NEEDLE", "NET", "NEW YORK", "NIGHT", "NINJA", "NOTE", "NOVEL", "NURSE", "NUT", "OCTOPUS", "OIL", "OLIVE", "OLYMPUS", "OPERA", "ORANGE", "ORGAN", "PALM", "PAN", "PANTS", "PAPER", "PARACHUTE", "PARK", "PART", "PASS", "PASTE", "PENGUIN", "PHOENIX", "PIANO", "PIE", "PILOT", "PIN", "PIPE", "PIRATE", "PISTOL", "PIT", "PITCH", "PLANE", "PLASTIC", "PLATE", "PLATYPUS", "PLAY", "PLOT", "POINT", "POISON", "POLE", "POLICE", "POOL", "PORT", "POST", "POUND", "PRESS", "PRINCESS", "PUMPKIN", "PUPIL", "PYRAMID", "QUEEN", "RABBIT", "RACKET", "RAY", "REVOLUTION", "RING", "ROBIN", "ROBOT", "ROCK", "ROME", "ROOT", "ROSE", "ROULETTE", "ROUND", "ROW", "RULER", "SATELLITE", "SATURN", "SCALE", "SCHOOL", "SCIENTIST", "SCORPION", "SCREEN", "SCUBA DIVER", "SEAL", "SERVER", "SHADOW", "SHAKESPEARE", "SHARK", "SHIP", "SHOE", "SHOP", "SHOT", "SINK", "SKYSCRAPER", "SLIP", "SLUG", "SMUGGLER", "SNOW", "SNOWMAN", "SOCK", "SOLDIER", "SOUL", "SOUND", "SPACE", "SPELL", "SPIDER", "SPIKE", "SPINE", "SPOT", "SPRING", "SPY", "SQUARE", "STADIUM", "STAFF", "STAR", "STATE", "STICK", "STOCK", "STRAW", "STREAM", "STRIKE", "STRING", "SUB", "SUIT", "SUPERHERO", "SWING", "SWITCH", "TABLE", "TABLET", "TAG", "TAIL", "TAP", "TEACHER", "TELESCOPE", "TEMPLE", "THEATER", "THIEF", "THUMB", "TICK", "TIE", "TIME", "TOKYO", "TOOTH", "TORCH", "TOWER", "TRACK", "TRAIN", "TRIANGLE", "TRIP", "TRUNK", "TUBE", "TURKEY", "UNDERTAKER", "UNICORN", "VACUUM", "VAN", "VET", "WAKE", "WALL", "WAR", "WASHER", "WASHINGTON", "WATCH", "WATER", "WAVE", "WEB", "WELL", "WHALE", "WHIP", "WIND", "WITCH", "WORM", "YARD"];

// English Nouns
var nounsData = ["ACCOUNT", "ACHIEVER", "ACOUSTICS", "ACT", "ACTION", "ACTIVITY", "ACTOR", "ADDITION", "ADJUSTMENT", "ADVERTISEMENT", "ADVICE", "AFTERMATH", "AFTERNOON", "AFTERTHOUGHT", "AGREEMENT", "AIR", "AIRPLANE", "AIRPORT", "ALARM", "AMOUNT", "AMUSEMENT", "ANGER", "ANGLE", "ANIMAL ", "ANSWER", "ANT", "ANTS ", "APPARATUS", "APPAREL", "APPLE", "APPLES ", "APPLIANCE", "APPROVAL", "ARCH", "ARGUMENT", "ARITHMETIC", "ARM", "ARMY", "ART", "ATTACK", "ATTEMPT", "ATTENTION", "ATTRACTION", "AUNT", "AUTHORITY", "BABIES ", "BABY ", "BACK", "BADGE", "BAG", "BAIT", "BALANCE", "BALL", "BALLOON", "BALLS ", "BANANA", "BAND", "BASE", "BASEBALL", "BASIN", "BASKET", "BASKETBALL", "BAT", "BATH", "BATTLE", "BEAD", "BEAM", "BEAN", "BEAR", "BEARS ", "BEAST", "BED", "BEDROOM", "BEDS ", "BEE", "BEEF", "BEETLE", "BEGGAR", "BEGINNER", "BEHAVIOR", "BELIEF", "BELIEVE", "BELL", "BELLS ", "BERRY", "BIKE", "BIKES ", "BIRD", "BIRDS ", "BIRTH", "BIRTHDAY", "BIT", "BITE", "BLADE", "BLOOD", "BLOW", "BOARD", "BOAT", "BOATS ", "BODY", "BOMB", "BONE", "BOOK", "BOOKS ", "BOOT", "BORDER", "BOTTLE", "BOUNDARY", "BOX", "BOY", "BOYS ", "BRAIN", "BRAKE", "BRANCH", "BRASS", "BREAD", "BREAKFAST", "BREATH", "BRICK", "BRIDGE", "BROTHER", "BROTHERS ", "BRUSH", "BUBBLE", "BUCKET", "BUILDING", "BULB", "BUN", "BURN", "BURST", "BUSHES", "BUSINESS", "BUTTER", "BUTTON", "CABBAGE", "CABLE", "CACTUS", "CAKE", "CAKES ", "CALCULATOR", "CALENDAR", "CAMERA", "CAMP", "CAN", "CANNON", "CANVAS", "CAP", "CAPTION", "CAR ", "CARD", "CARE", "CARPENTER", "CARRIAGE", "CARS ", "CART", "CAST", "CAT", "CATS ", "CATTLE", "CAUSE", "CAVE", "CELERY", "CELLAR", "CEMETERY", "CENT", "CHAIN", "CHAIR ", "CHAIRS ", "CHALK", "CHANCE", "CHANGE", "CHANNEL", "CHEESE", "CHERRIES", "CHERRY", "CHESS", "CHICKEN ", "CHICKENS ", "CHILDREN", "CHIN", "CHURCH", "CIRCLE", "CLAM", "CLASS", "CLOCK", "CLOCKS ", "CLOTH", "CLOUD", "CLOUDS ", "CLOVER", "CLUB", "COACH", "COAL", "COAST", "COAT", "COBWEB", "COIL", "COLLAR", "COLOR", "COMB", "COMFORT", "COMMITTEE", "COMPANY", "COMPARISON", "COMPETITION", "CONDITION", "CONNECTION", "CONTROL", "COOK", "COPPER", "COPY", "CORD", "CORK", "CORN ", "COUGH", "COUNTRY", "COVER", "COW", "COWS ", "CRACK", "CRACKER", "CRATE", "CRAYON", "CREAM", "CREATOR", "CREATURE", "CREDIT", "CRIB", "CRIME", "CROOK", "CROW", "CROWD", "CROWN", "CRUSH", "CRY", "CUB", "CUP", "CURRENT", "CURTAIN", "CURVE", "CUSHION", "DAD", "DAUGHTER", "DAY", "DEATH", "DEBT", "DECISION", "DEER", "DEGREE", "DESIGN", "DESIRE", "DESK", "DESTRUCTION", "DETAIL", "DEVELOPMENT", "DIGESTION", "DIME", "DINNER", "DINOSAURS ", "DIRECTION", "DIRT", "DISCOVERY", "DISCUSSION", "DISEASE", "DISGUST", "DISTANCE", "DISTRIBUTION", "DIVISION", "DOCK", "DOCTOR", "DOG", "DOGS ", "DOLL", "DOLLS ", "DONKEY", "DOOR", "DOWNTOWN", "DRAIN", "DRAWER", "DRESS", "DRINK", "DRIVING", "DROP", "DRUG", "DRUM", "DUCK ", "DUCKS ", "DUST", "EAR", "EARTH", "EARTHQUAKE", "EDGE", "EDUCATION", "EFFECT", "EGG", "EGGNOG", "EGGS ", "ELBOW", "END", "ENGINE", "ERROR", "EVENT", "EXAMPLE", "EXCHANGE", "EXISTENCE", "EXPANSION", "EXPERIENCE", "EXPERT", "EYE", "EYES", "FACE", "FACT", "FAIRIES ", "FALL", "FAMILY", "FAN", "FANG ", "FARM", "FARMER ", "FATHER", "FATHER", "FAUCET", "FEAR", "FEAST", "FEATHER", "FEELING", "FEET", "FICTION", "FIELD", "FIFTH", "FIGHT", "FINGER", "FINGER", "FIRE ", "FIREMAN", "FISH", "FLAG", "FLAME", "FLAVOR", "FLESH", "FLIGHT", "FLOCK", "FLOOR", "FLOWER", "FLOWERS ", "FLY", "FOG", "FOLD", "FOOD", "FOOT", "FORCE", "FORK", "FORM", "FOWL", "FRAME", "FRICTION", "FRIEND", "FRIENDS ", "FROG", "FROGS ", "FRONT", "FRUIT", "FUEL", "FURNITURE", "ALLEY", "GAME", "GARDEN", "GATE", "GEESE", "GHOST", "GIANTS ", "GIRAFFE", "GIRL", "GIRLS ", "GLASS", "GLOVE", "GLUE", "GOAT", "GOLD", "GOLDFISH", "GOOD-BYE ", "GOOSE", "GOVERNMENT", "GOVERNOR", "GRADE", "GRAIN", "GRANDFATHER", "GRANDMOTHER", "GRAPE", "GRASS", "GRIP", "GROUND", "GROUP", "GROWTH", "GUIDE", "GUITAR", "GUN", "HAIR", "HAIRCUT", "HALL", "HAMMER", "HAND", "HANDS ", "HARBOR", "HARMONY", "HAT", "HATE", "HEAD", "HEALTH", "HEARING", "HEART", "HEAT", "HELP", "HEN", "HILL ", "HISTORY", "HOBBIES", "HOLE", "HOLIDAY", "HOME ", "HONEY", "HOOK", "HOPE", "HORN", "HORSE", "HORSES ", "HOSE", "HOSPITAL", "HOT", "HOUR", "HOUSE", "HOUSES ", "HUMOR", "HYDRANT", "ICE", "ICICLE", "IDEA", "IMPULSE", "INCOME", "INCREASE", "INDUSTRY", "INK", "INSECT", "INSTRUMENT", "INSURANCE", "INTEREST", "INVENTION", "IRON", "ISLAND", "JAIL", "JAM", "JAR", "JEANS", "JELLY", "JELLYFISH", "JEWEL", "JOIN", "JOKE", "JOURNEY", "JUDGE", "JUICE", "JUMP", "KETTLE", "KEY", "KICK", "KISS", "KITE", "KITTEN", "KITTENS ", "KITTY ", "KNEE", "KNIFE", "KNOT", "KNOWLEDGE", "LABORER", "LACE", "LADYBUG", "LAKE", "LAMP", "LAND", "LANGUAGE", "LAUGH", "LAWYER", "LEAD", "LEAF", "LEARNING", "LEATHER", "LEG ", "LEGS", "LETTER", "LETTERS ", "LETTUCE", "LEVEL", "LIBRARY", "LIFT", "LIGHT", "LIMIT", "LINE", "LINEN", "LIP", "LIQUID", "LIST", "LIZARDS ", "LOAF", "LOCK", "LOCKET", "LOOK", "LOSS", "LOVE", "LOW", "LUMBER", "LUNCH", "LUNCHROOM", "MACHINE", "MAGIC", "MAID", "MAILBOX", "MAN", "MANAGER", "MAP", "MARBLE", "MARK", "MARKET", "MASK", "MASS", "MATCH", "MEAL", "MEASURE", "MEAT", "MEETING", "MEMORY", "MEN", "METAL", "MICE ", "MIDDLE", "MILK", "MIND", "MINE", "MINISTER", "MINT", "MINUTE", "MIST", "MITTEN", "MOM", "MONEY", "MONKEY", "MONTH", "MOON", "MORNING", "MOTHER", "MOTION", "MOUNTAIN", "MOUTH", "MOVE", "MUSCLE", "MUSIC", "NAIL", "NAME", "NATION", "NECK", "NEED", "NEEDLE", "NERVE", "NEST ", "NET", "NEWS", "NIGHT", "NOISE", "NORTH", "NOSE", "NOTE", "NOTEBOOK", "NUMBER", "NUT", "OATMEAL", "OBSERVATION", "OCEAN", "OFFER", "OFFICE", "OIL", "OPERATION", "OPINION", "ORANGE", "ORANGES ", "ORDER", "ORGANIZATION", "ORNAMENT", "OVEN", "OWL", "OWNER", "PAGE", "PAIL", "PAIN", "PAINT", "PAN", "PANCAKE", "PAPER", "PARCEL", "PARENT", "PARK", "PART", "PARTNER", "PARTY", "PASSENGER", "PASTE", "PATCH", "PAYMENT", "PEACE", "PEAR", "PEN", "PENCIL", "PERSON", "PEST", "PET", "PETS ", "PICKLE", "PICTURE", "PIE", "PIES ", "PIG", "PIGS ", "PIN", "PIPE", "PIZZAS ", "PLACE", "PLANE", "PLANES ", "PLANT", "PLANTATION", "PLANTS ", "PLASTIC", "PLATE", "PLAY", "PLAYGROUND", "PLEASURE", "PLOT", "PLOUGH", "POCKET", "POINT", "POISON", "POLICE", "POLISH", "POLLUTION", "POPCORN", "PORTER", "POSITION", "POT", "POTATO", "POWDER", "POWER", "PRICE", "PRINT", "PRISON", "PROCESS", "PRODUCE", "PROFIT", "PROPERTY", "PROSE", "PROTEST", "PULL", "PUMP", "PUNISHMENT", "PURPOSE", "PUSH", "QUARTER", "QUARTZ", "QUEEN", "QUESTION", "QUICKSAND", "QUIET", "QUILL", "QUILT", "QUINCE", "QUIVER", "RABBIT ", "RABBITS ", "RAIL", "RAILWAY", "RAIN", "RAINSTORM", "RAKE", "RANGE", "RAT", "RATE", "RAY", "REACTION", "READING", "REASON", "RECEIPT", "RECESS", "RECORD", "REGRET", "RELATION", "RELIGION", "REPRESENTATIVE", "REQUEST", "RESPECT", "REST", "REWARD", "RHYTHM", "RICE", "RIDDLE", "RIFLE", "RING", "RINGS ", "RIVER", "ROAD", "ROBIN ", "ROCK", "ROD", "ROLL", "ROOF", "ROOM", "ROOT", "ROSE", "ROUTE", "RUB", "RULE", "RUN", "SACK", "SAIL", "SALT", "SAND", "SCALE", "SCARECROW", "SCARF", "SCENE", "SCENT", "SCHOOL", "SCIENCE", "SCISSORS", "SCREW", "SEA", "SEASHORE", "SEAT", "SECRETARY", "SEED", "SELECTION", "SELF", "SENSE", "SERVANT", "SHADE", "SHAKE", "SHAME", "SHAPE", "SHEEP", "SHEET", "SHELF", "SHIP", "SHIRT", "SHOCK", "SHOE", "SHOES ", "SHOP", "SHOW", "SIDE", "SIDEWALK", "SIGN", "SILK", "SILVER", "SINK", "SISTER", "SISTERS ", "SIZE", "SKATE", "SKIN", "SKIRT", "SKY", "SLAVE", "SLEEP", "SLEET", "SLIP", "SLOPE", "SMASH", "SMELL", "SMILE", "SMOKE", "SNAIL", "SNAILS ", "SNAKE", "SNAKES ", "SNEEZE", "SNOW", "SOAP", "SOCIETY", "SOCK", "SODA", "SOFA", "SON", "SONG", "SONGS ", "SORT", "SOUND", "SOUP", "SPACE", "SPADE", "SPARK", "SPIDERS ", "SPONGE", "SPOON", "SPOT", "SPRING", "SPY", "SQUARE", "SQUIRREL", "STAGE", "STAMP", "STAR", "START", "STATEMENT", "STATION", "STEAM", "STEEL", "STEM", "STEP", "STEW", "STICK", "STICKS ", "STITCH", "STOCKING", "STOMACH", "STONE", "STOP", "STORE", "STORY", "STOVE", "STRANGER", "STRAW", "STREAM", "STREET", "STRETCH", "STRING", "STRUCTURE", "SUBSTANCE", "SUGAR", "SUGGESTION", "SUIT", "SUMMER", "SUN", "SUPPORT", "SURPRISE", "SWEATER", "SWIM", "SWING", "SYSTEM", "TABLE", "TAIL", "TALK", "TANK", "TASTE", "TAX", "TEACHING", "TEAM", "TEETH ", "TEMPER", "TENDENCY", "TENT", "TERRITORY", "TEST", "TEXTURE", "THEORY", "THING", "THINGS ", "THOUGHT", "THREAD", "THRILL", "THROAT", "THRONE", "THUMB", "THUNDER", "TICKET", "TIGER", "TIME", "TIN", "TITLE", "TOAD", "TOE", "TOES", "TOMATOES ", "TONGUE", "TOOTH", "TOOTHBRUSH", "TOOTHPASTE", "TOP ", "TOUCH", "TOWN", "TOY ", "TOYS ", "TRADE", "TRAIL", "TRAIN", "TRAINS ", "TRAMP", "TRANSPORT", "TRAY", "TREATMENT", "TREE", "TREES ", "TRICK", "TRIP", "TROUBLE", "TROUSERS", "TRUCK", "TRUCKS ", "TUB", "TURKEY", "TURN", "TWIG", "TWIST", "UMBRELLA", "UNCLE", "UNDERWEAR", "UNIT", "USE", "VACATION", "VALUE", "VAN", "VASE", "VEGETABLE", "VEIL", "VEIN", "VERSE", "VESSEL", "VEST", "VIEW", "VISITOR", "VOICE", "VOLCANO", "VOLLEYBALL", "VOYAGE", "WALK", "WALL", "WAR", "WASH", "WASTE", "WATCH", "WATER", "WAVE", "WAVES ", "WAX", "WAY", "WEALTH", "WEATHER", "WEEK", "WEIGHT", "WHEEL", "WHIP", "WHISTLE", "WILDERNESS", "WIND ", "WINDOW ", "WINE", "WING", "WINTER", "WIRE", "WISH", "WOMAN", "WOMEN", "WOOD", "WOOL", "WORD", "WORK", "WORM", "WOUND", "WREN", "WRENCH", "WRIST", "WRITER", "WRITING", "YAK", "YAM", "YARD", "YARN", "YEAR", "YOKE", "ZEBRA ", "ZEPHYR", "ZINC", "ZIPPER", "ZOO"];

// Spanish Original Words
var esData = ["ABOGADO" ,"ACEITE" ,"ÁFRICA" ,"AGENTE" ,"AGUA" ,"ÁGUILA" ,"AGUJA" ,"AGUJERO" ,"AIRE" ,"ALEMANIA" ,"ALGODÓN" ,"ALIANZA" ,"ALPES" ,"AMBULANCIA" ,"AMÉRICA" ,"ÁNGEL" ,"ANILLO" ,"ANTÁRTIDA" ,"ANTORCHA" ,"ARAÑA" ,"ARCHIVO" ,"ARCO" ,"ARGENTINA" ,"ARTÍCULO" ,"AS" ,"ATLÁNTIDA" ,"AZTECA" ,"BAILE" ,"BALA" ,"BALLENA" ,"BANCO" ,"BANDA" ,"BAÑO" ,"BARCO" ,"BARRA" ,"BATERÍA" ,"BERLÍN" ,"BERMUDAS" ,"BICHO" ,"BLANCO" ,"BLOQUE" ,"BOCA" ,"BOLA" ,"BOLSA" ,"BOMBA" ,"BOSQUE" ,"BOTA" ,"BOTELLA" ,"BOTÓN" ,"BRAZO" ,"BRUJA" ,"CABALLERO" ,"CABALLO" ,"CABEZA" ,"CABINA" ,"CABO" ,"CACTUS" ,"CADENA" ,"CAJA" ,"CAMA" ,"CÁMARA" ,"CAMBIO" ,"CAMPANA" ,"CAMPO" ,"CANAL" ,"CANGURO" ,"CANTO" ,"CAÑA" ,"CAPA" ,"CAPITAL" ,"CAQUI" ,"CARA" ,"CARAVANA" ,"CARGA" ,"CARRERA" ,"CARRO" ,"CARTA" ,"CASCO" ,"CASINO" ,"CAZA" ,"CEMENTERIO" ,"CENTAURO" ,"CENTRO" ,"CERVANTES" ,"CHECO" ,"CHOCOLATE" ,"CHOQUE" ,"CHULETA" ,"CIENTÍFICO" ,"CINTA" ,"CINTURÓN" ,"CÍRCULO" ,"CLASE" ,"COCHE" ,"COCINERO" ,"COCO" ,"CÓDIGO" ,"COLA" ,"CÓLERA" ,"COLUMNA" ,"COMETA" ,"COMPÁS" ,"CONCIERTO" ,"CONEJO" ,"CONTRABANDISTA" ,"COPA" ,"CORAZÓN" ,"CORNETA" ,"CORONA" ,"CORREDOR" ,"CORRIENTE" ,"CORTE" ,"CRESTA" ,"CROMO" ,"CRUZ" ,"CUADRO" ,"CUARTO" ,"CUBIERTA" ,"CUBO" ,"CUCHILLO" ,"CUELLO" ,"CUERDA" ,"CUERNO" ,"CURA" ,"DAMA" ,"DELTA" ,"DESTINO" ,"DÍA" ,"DIAMANTE" ,"DIANA" ,"DIARIO" ,"DIENTE" ,"DINOSAURIO" ,"DISCO" ,"DON" ,"DRAGÓN" ,"DUENDE" ,"EGIPTO" ,"EMBAJADA" ,"EMPERADOR" ,"ENANO" ,"ENFERMEDAD" ,"ENFERMERA" ,"ENLACE" ,"ESCORPIÓN" ,"ESPACIO" ,"ESPÍA" ,"ESTACIÓN" ,"ESTADIO" ,"ESTADO" ,"ESTRELLA" ,"ESTUDIO" ,"ETIQUETA" ,"EUROPA" ,"EXTRATERRESTRE" ,"FALDA" ,"FANTASMA" ,"FARO" ,"FICHA" ,"FIESTA" ,"FIGURA" ,"FLAUTA" ,"FLECHA" ,"FOSO" ,"FRANCIA" ,"FRENTE" ,"FUEGO" ,"FUENTE" ,"FUERZA" ,"FURGONETA" ,"GANCHO" ,"GATO" ,"GENIO" ,"GIGANTE" ,"GOLFO" ,"GOLONDRINA" ,"GOLPE" ,"GOMA" ,"GÓNDOLA" ,"GOTA" ,"GRADO" ,"GRANADA" ,"GRANO" ,"GRECIA" ,"GRIFO" ,"GUANTE" ,"GUARDIA" ,"GUERRA" ,"GUSANO" ,"HELADO" ,"HELICÓPTERO" ,"HIELO" ,"HIERBA" ,"HOJA" ,"HOLLYWOOD" ,"HORCA" ,"HOSPITAL" ,"HOTEL" ,"IGLESIA" ,"IMÁN" ,"INDIA" ,"ÍNDICE" ,"INGLATERRA" ,"ITALIA" ,"JARRA" ,"JUDÍA" ,"JUICIO" ,"KIWI" ,"LADRÓN" ,"LAGONESS" ,"LÁSER" ,"LÁTIGO" ,"LENGUA" ,"LEÓN" ,"LIBRA" ,"LIMA" ,"LIMUSINA" ,"LÍNEA" ,"LISTA" ,"LLAMA" ,"LLAVE" ,"LOMO" ,"LONDRES" ,"LUNA" ,"LUZ" ,"MAESTRO" ,"MAGIA" ,"MALTA" ,"MANCHA" ,"MANDO" ,"MANGA" ,"MANGO" ,"MANO" ,"MANZANA" ,"MAÑANA" ,"MARCA" ,"MARCHA" ,"MARFIL" ,"MASA" ,"MÁSCARA" ,"MAZO" ,"MÉDICO" ,"MERCURIO" ,"MESA" ,"METRO" ,"MÉXICO" ,"MICRO" ,"MICROSCOPIO" ,"MIELO" ,"MILLONARIO" ,"MINA" ,"MISIL" ,"MODELO" ,"MÓDULO" ,"MONITOR" ,"MONO" ,"MORTERO" ,"MOSCÚ" ,"MOTOR" ,"MUELLE" ,"MUERTE" ,"MUÑECA" ,"MURO" ,"NARANJA" ,"NAVE" ,"NIEVE" ,"NILO" ,"NINJA" ,"NOCHE" ,"NOTA" ,"NUDO" ,"NUEVAYORK" ,"OBRA" ,"OJO" ,"OLA" ,"OLIMPO" ,"ÓPERA" ,"ORDEN" ,"ÓRGANO" ,"ORNITORRINCO" ,"ORO" ,"OSO" ,"PALA" ,"PALMA" ,"PANTALLA" ,"PAPEL" ,"PARACAÍDAS" ,"PASE" ,"PASO" ,"PASTA" ,"PASTEL" ,"PAVO" ,"PEKÍN" ,"PELÍCULA" ,"PELOTÓN" ,"PENDIENTE" ,"PERRO" ,"PEZ" ,"PICO" ,"PIE" ,"PIEZA" ,"PILA" ,"PILOTO" ,"PINCHO" ,"PINGÜINO" ,"PINTA" ,"PIÑA" ,"PIRÁMIDE" ,"PIRATA" ,"PISTA" ,"PISTOLA" ,"PLACA" ,"PLANO" ,"PLANTA" ,"PLÁTANO" ,"PLAYA" ,"PLOMO" ,"PLUMA" ,"POLICÍA" ,"POLO" ,"PORTADA" ,"PORTERO" ,"POTRO" ,"PRENSA" ,"PRIMA" ,"PRINCESA" ,"PUENTE" ,"PUERTO" ,"PULPO" ,"PULSO" ,"PUNTA" ,"PUNTO" ,"RADIO" ,"RASCACIELOS" ,"RATÓN" ,"RAYO" ,"RED" ,"REGLA" ,"REINA" ,"RESERVA" ,"REVOLUCIÓN" ,"REY" ,"ROBOT" ,"ROJO" ,"ROMA" ,"RONDA" ,"ROSA" ,"RULETA" ,"SABLE" ,"SÁHARA" ,"SALSA" ,"SATÉLITE" ,"SATURNO" ,"SEÑAL" ,"SERIE" ,"SERPIENTE" ,"SIERRA" ,"SILLA" ,"SIRENA" ,"SOBRE" ,"SOLDADO" ,"SUBMARINISTA" ,"SUERTE" ,"SUPERHÉROE" ,"TABLA" ,"TABLETA" ,"TACO" ,"TACTO" ,"TALÓN" ,"TANQUE" ,"TAPA" ,"TARDE" ,"TEATRO" ,"TECLADO" ,"TELESCOPIO" ,"TESTIGO" ,"TIEMPO" ,"TIENDA" ,"TIERRA" ,"TOKIO" ,"TOPO" ,"TORRE" ,"TRAMA" ,"TRONCO" ,"TUBERÍA" ,"TUBO" ,"UNICORNIO" ,"VACÍO" ,"VADO" ,"VAMPIRO" ,"VELA" ,"VENENO" ,"VENUS" ,"VESTIDO" ,"VIDA" ,"VIDRIO" ,"VIENTO" ,"YEMA" ,"ZANAHORIA" ,"ZAPATO"];

var movieData = ["The Shawshank Redemption",
    "The Godfather",
    "The Godfather, Part II",
    "The Dark Knight",
    "Pulp Fiction",
    "The Good, The Bad and The Ugly",
    "12 Angry Men",
    "Schindler's List",
    "The Lord of the Rings: The Return of the King",
    "Fight Club",
    "The Fellowship Of The Ring",
    "Star Wars: Episode V - The Empire Strikes Back",
    "Inception",
    "Forrest Gump",
    "One Flew Over the Cuckoo's Nest",
    "The Lord of the Rings: The Two Towers",
    "Interstellar",
    "Goodfellas",
    "The Matrix",
    "Star Wars: Episode IV - A New Hope",
    "Seven Samurai",
    "City of God",
    "Se7en",
    "The Usual Suspects",
    "The Silence of the Lambs",
    "It's a Wonderful Life",
    "Once Upon a Time in the West",
    "Leon: The Professional",
    "Life Is Beautiful",
    "Casablanca",
    "Raiders of the Lost Ark",
    "American History X",
    "Saving Private Ryan",
    "City Lights",
    "Psycho",
    "Spirited Away",
    "Rear Window",
    "Intouchables",
    "Modern Times",
    "Whiplash",
    "Terminator 2: Judgment Day",
    "Memento",
    "The Green Mile",
    "The Pianist",
    "The Departed",
    "Sunset Boulevard",
    "Apocalypse Now",
    "Dr. Strangelove or How I Learned to Stop Worrying and Love the Bomb",
    "Gladiator",
    "Back to the Future",
    "Alien",
    "The Prestige",
    "The Great Dictator",
    "The Lives of Others",
    "The Lion King",
    "Django Unchained",
    "The Dark Knight Rises",
    "Cinema Paradiso",
    "The Shining",
    "Paths of Glory",
    "American Beauty",
    "Wall-E",
    "North by Northwest",
    "Aliens",
    "Citizen Kane",
    "Vertigo",
    "Amelie",
    "M",
    "Das Boot",
    "Grave of the Fireflies",
    "Toy Story 3",
    "Oldboy",
    "Princess Mononoke",
    "Star Wars: Episode VI - Return of the Jedi",
    "Once Upon a Time in America",
    "A Clockwork Orange",
    "Reservoir Dogs",
    "Taxi Driver",
    "Double Indemnity",
    "Braveheart",
    "Requiem for a Dream",
    "To Kill a Mockingbird",
    "Lawrence of Arabia",
    "Witness for the Prosecution",
    "Eternal Sunshine of the Spotless Mind",
    "Full Metal Jacket",
    "Singin' in the Rain",
    "The Sting",
    "Bicycle Thieves",
    "Amadeus",
    "Monty Python and the Holy Grail",
    "Snatch",
    "Rashomon",
    "L.A. Confidential",
    "For a Few Dollars More",
    "2001: A Space Odyssey",
    "The Kid",
    "All About Eve",
    "The Apartment",
    "Some Like It Hot",
    "Inglourious Basterds",
    "Birdman",
    "Indiana Jones and the Last Crusade",
    "The Treasure of the Sierra Madre",
    "The Third Man",
    "A Seperation",
    "Yojimbo",
    "Toy Story",
    "Batman Begins",
    "Metropolis",
    "Like Stars on Earth",
    "Unforgiven",
    "Scarface",
    "Raging Bull",
    "Up",
    "Chinatown",
    "3 Idiots",
    "The Great Escape",
    "Downfall",
    "Boyhood",
    "Die Hard",
    "On the Waterfront",
    "Pan's Labyrinth",
    "Mr. Smith Goes to Washington",
    "The Hunt",
    "Heat",
    "CM101MMXI Fundamentals",
    "Gone Girl",
    "The Bridge on the River Kwai",
    "Good Will Hunting",
    "The Bandit",
    "My Neighbor Totoro",
    "The Seventh Seal",
    "Ikiru",
    "The Gold Rush",
    "The Elephant Man",
    "The Wolf of Wall Street",
    "Ran",
    "Wild Strawberries",
    "Blade Runner",
    "The General",
    "Lock, Stock and Two Smoking Barrels",
    "The Secret in Their Eyes",
    "Casino",
    "Gran Torino",
    "The Big Lebowski",
    "Warrior",
    "Rebecca",
    "V for Vendetta",
    "Howl's Moving Castle",
    "Paint It Yellow",
    "The Deer Hunter",
    "It Happened One Night",
    "Cool Hand Luke",
    "How to Train Your Dragon",
    "Fargo",
    "Judgment at Nuremberg",
    "Trainspotting",
    "Gone with the Wind",
    "Rush",
    "Into the Wild",
    "The Maltese Falcon",
    "A Beautiful Mind",
    "Dial M for Murder",
    "The Sixth Sense",
    "The Wages of Fear",
    "Hotel Rwanda",
    "The Thing",
    "Finding Nemo",
    "Mary and Max",
    "No Country for Old Men",
    "Butch Cassidy and the Sundance Kid",
    "Kill Bill: Vol. 1",
    "Platoon",
    "Life of Brian",
    "Incendies",
    "Guardians of the Galaxy",
    "Dil Chahta Hai",
    "12 Years a Slave",
    "Network",
    "Touch of Evil",
    "Diabolique (1955)",
    "Annie Hall",
    "The Princess Bride",
    "There Will Be Blood",
    "The Grand Budapest Hotel",
    "Stand by Me",
    "Sin City",
    "Ben-Hur",
    "The 400 Blows",
    "Amores Perros",
    "In the Name of the Father",
    "Million Dollar Baby",
    "The Grapes of Wrath",
    "The Wizard of Oz",
    "Hachi: A Dog's Tale",
    "Persona",
    "The Best Years of Our Lives",
    "The Avengers",
    "Nausicaä of the Valley of the Wind",
    "The Bourne Ultimatum",
    "Gandhi",
    "The Imitation Game",
    "Donnie Darko",
    "8 1/2",
    "Gangs of Wasseypur",
    "Strangers on a Train",
    "Infernal Affairs",
    "Stalker",
    "12 Monkeys",
    "Jaws",
    "Shutter Island",
    "X-Men: Days of Future Past",
    "High Noon",
    "Lagaan: Once Upon a Time in India",
    "Notorious",
    "The Terminator",
    "Before Sunrise",
    "The King's Speech",
    "Groundhog Day",
    "Harry Potter and the Deathly Hallows: Part 2",
    "Fanny and Alexander",
    "Ip Man",
    "The Battle of Algiers",
    "Rocky",
    "Dog Day Afternoon",
    "The Night of the Hunter",
    "Monsters, Inc.",
    "La Haine",
    "Memories of Murder",
    "La Strada",
    "Pirates of the Caribbean: The Curse of the Black Pearl",
    "Who's Afraid of Virginia Woolf?",
    "Barry Lyndon",
    "A Fistful of Dollars",
    "Castle in the Sky",
    "The Truman Show",
    "The Big Sleep",
    "The Help",
    "Jurassic Park",
    "Roman Holiday",
    "The Graduate",
    "The Hustler",
    "Papillon",
    "Beauty and the Beast",
    "In the Mood for Love",
    "The Celebration",
    "Prisoners",
    "Rope",
    "Swades: We, the People"
];

var cahData = ["Steven Hawking talking dirty."
  ,"Chivalry."
  ,"Edible underwear."
  ,"Pretending to care."
  ,"Firing a rifle into the air while balls deep in a squealing hog."
  ,"Children on leashes."
  ,"Police brutality."
  ,"Autocanniba- lism."
  ,"One trillion dollars."
  ,"72 virgins."
  ,"A cooler full of organs."
  ,"God."
  ,"Rehab."
  ,"Coat hanger abortions."
  ,"The Devil himself."
  ,"Not giving a shit about the Third World."
  ,"Not reciprocating oral sex."
  ,"Nazis."
  ,"Slapping a biscuit out of an orphan's mouth."
  ,"A foetus."
  ,"Child beauty pageants."
  ,"Cottaging."
  ,"The female orgasm."
  ,"Stranger danger."
  ,"A vindaloo poo."
  ,"Arnold Schwarzenegger."
  ,"Passive- aggressive Post-it notes."
  ,"Ethnic cleansing."
  ,"Rohypnol."
  ,"Bitches."
  ,"A fanny fart."
  ,"Pixelated bukkake."
  ,"Erectile dysfunction."
  ,"Lockjaw."
  ,"Incest."
  ,"German dungeon porn."
  ,"A sassy black woman."
  ,"The scouts."
  ,"White privilege."
  ,"A live studio audience."
  ,"Friction."
  ,"Daddy issues."
  ,"Pac-Man uncontrollably guzzling cum."
  ,"Alcoholism."
  ,"Golden showers."
  ,"Foreskin."
  ,"Obesity."
  ,"A defective condom."
  ,"The KKK."
  ,"Crystal Meth."
  ,"Getting so angry that you pop a boner."
  ,"The Blood of Christ."
  ,"Old-people smell."
  ,"Pulling out."
  ,"An asymmetric boob job."
  ,"Oestrogen."
  ,"Dogging."
  ,"A bleached arsehole."
  ,"Menstrual rage."
  ,"Farting and walking away."
  ,"A windmill full of corpses."
  ,"Elderly Japanese men."
  ,"AIDS."
  ,"Panda sex."
  ,"A thousand Scottish warriors lifting their skirts in unison."
  ,"A good sniff."
  ,"A bit of a slap and tickle."
  ,"A tribe of warrior women."
  ,"Jehova's Witness."
  ,"Sperm whales."
  ,"Fingering."
  ,"Teenage pregnancy."
  ,"Full frontal nudity."
  ,"Chainsaws for hands."
  ,"8 oz. of sweet Mexican black-tar heroin."
  ,"Balls."
  ,"Wanking into a pool of children's tears."
  ,"Cheeky bum sex."
  ,"Dead babies."
  ,"A snapping turtle biting the tip of your penis."
  ,"Whipping it out."
  ,"When you fart and a little bit comes out."
  ,"Tentacle porn."
  ,"Land mines."
  ,"Spontaneous human combustion."
  ,"Dick fingers."
  ,"Child abuse."
  ,"The homosexual agenda."
  ,"A posh wank."
  ,"Leprosy."
  ,"The placenta."
  ,"Wifely duties."
  ,"Two midgets shitting into a bucket."
  ,"A bitch slap."
  ,"Necrophilia."
  ,"Getting naked and watching Teletubbies."
  ,"A salty surprise."
  ,"Drinking alone."
  ,"Wet dreams."
  ,"The art of seduction."
  ,"Porn stars."
  ,"Shitting out a perfect Cumberland sausage."
  ,"Chunks of dead prostitute."
  ,"Daddies® Brown Sauce."
  ,"Praying the gay away."
  ,"An ice-pick lobotomy."
  ,"Cheating in the Paralympics."
  ,"Auschwitz."
  ,"A mating display."
  ,"Poorly timed Holocaust jokes."
  ,"Paedophiles."
  ,"Concealing an erection."
  ,"Masturbation."
  ,"Tasteful sideboob."
  ,"The Jews."
  ,"Nipple blades."
  ,"A spastic nerd."
  ,"Amputees."
  ,"Anal beads."
  ,"Picking up girls at the abortion clinic."
  ,"Copping a feel."
  ,"A sad handjob."
  ,"Scrubbing under the folds."
  ,"The clitoris."
  ,"Sexting."
  ,"My ex-wife."
  ,"Scientology."
  ,"Sniffing glue."
  ,"Viagra®."
  ,"Shiny objects."
  ,"Natural male enhancement."
  ,"Five litres of Special Brew."
  ,"Michael Jackson."
  ,"Being a dick to children."
  ,"Growing a pair."
  ,"Queen Elizabeth's immaculate anus."
  ,"Expecting a burp and vomiting on the floor."
  ,"A robust mongoloid."
  ,"Cybernetic enhancements."
  ,"Doing shit in Pudsey Bear's eyehole."
  ,"My genitals."
  ,"A mime having a stroke."
  ,"The Pope."
  ,"Men."
  ,"Wiping her bum."
  ,"Famine."
  ,"Lance Armstrong's missing testicle."
  ,"A gentle caress of the inner thigh."
  ,"A stray pube."
  ,"Genital piercings."
  ,"An erection that lasts longer than four hours."
  ,"The profoundly handicapped."
  ,"Puberty."
  ,"Dirty nappies."
  ,"White people."
  ,"Take-backsies."
  ,"Man meat."
  ,"Lactation."
  ,"Grandma."
  ,"Destroying the evidence."
  ,"Dying of dysentery."
  ,"My sex life."
  ,"Multiple stab wounds."
  ,"Hospice care."
  ,"Sexual tension."
  ,"Heart-warming orphans."
  ,"50,000 volts straight to the nipples."
  ,"Public ridicule."
  ,"The heart of a child."
  ,"Extremely tight trousers."
  ,"Ecstasy."
  ,"My vagina."
  ,"Repression."
  ,"Over- compensation."
  ,"My collection of high-tech sex toys."
  ,"Gloryholes."
  ,"Passing a kidney stone."
  ,"An Oedipus complex."
  ,"Sharing needles."
  ,"Fear itself."
  ,"Consensual sex."
  ,"Kids with bum cancer."
  ,"Flesh-eating bacteria."
  ,"My inner demons."
  ,"Homeless people."
  ,"Surprise sex!"
  ,"Actually taking candy from a baby."
  ,"Altar boys."
  ,"Civilian casualties."
  ,"Unfathomable stupidity."
  ,"A pyramid of severed heads."
  ,"Waiting 'til marriage."
  ,"Frolicking."
  ,"Crucifixion."
  ,"A micropenis."
  ,"Battlefield amputations."
  ,"Licking things to claim them as your own."
  ,"Waking up half-naked in a Little Chef car park."
  ,"The violation of our most basic human rights."
  ,"Giving 110%."
  ,"A Super Soaker™ full of cat piss."
  ,"Preteens."
  ,"Germans on holidays."
  ,"My relationship status."
  ,"African children."
  ,"An oversized lollipop."
  ,"The gays."
  ,"Dry heaving."
  ,"Peeing a little bit."
  ,"Racism."
  ,"Hormone injections."
  ,"Leaked footage of Kate Middleton's colonoscopy."
  ,"Being on fire."
  ,"Pussy Galore."
  ,"A mad cow."
  ,"Used knickers."
  ,"Poor life choices."
  ,"Testicular torsion."
  ,"Mouth herpes."
  ,"Penis envy."
  ,"Grave robbing."
  ,"A bucket of fish heads."
  ,"A ginger's freckled ballsack."
  ,"Vigilante justice."
  ,"Shipping convicts to Australia."
  ,"Black people."
  ,"Being rich."
  ,"Harry Potter erotica."
  ,"Establishing dominance."
  ,"Self-loathing."
  ,"Vigorous jazz hands."
  ,"The milk man."
  ,"Women in yogurt adverts."
  ,"Poor people."
  ,"Raging diarrhoea."
  ,"Tea bagging."
  ,"Spit Roasting."
  ,"Accidental circumcision."
  ,"Dirty Sanchez."
  ,"Double penetration."
  ,"Thrush."
  ,"Licking a menstruating woman."
  ,"A butt plug dipped in chili."
  ,"Swingers."
  ,"Legalize female circumcision."
  ,"Fisting."
  ,"Dry fucking."
  ,"Chaffing."
  ,"A dead hooker."
  ,"A toothless whore."
  ,"Pimping out your wife."
  ,"Anal sex with your sister."
  ,"Fritzl."
  ,"DIY Frizl kit."
  ,"Day rape."
  ,"Gang rape."
  ,"Jesus fucking Christ."
  ,"Cradle snatcher."
  ,"Niggers."
  ,"Genocide."
  ,"Bestiality."
  ,"Split in two by a horse's penis."
  ,"A family of gerbils up your arse."
  ,"The winner of the Darwin awards."
  ,"A donkey size strap-on."
  ,"Setting your pubic hair on fire."
  ,"Forgetting to declaw a gerbil."
  ,"Parental love."
  ,"Ring of fire."
  ,"Carpet munching."
  ,"Faking an orgasm."
  ,"Waking up in an ice bath with missing organs."
  ,"Daisy chaining."
  ,"An infected penis piercing."
  ,"A broken ketchup bottle up your arse."
  ,"A wooden dildo."
  ,"Raping a nun."
  ,"Hermaphrodites."
  ,"Sperm cocktail."
  ,"Coming into a shoe while licking a toe."
  ,"Having your dad's baby."
  ,"Peeing inside a vagina."
  ,"Eating your own shit."
  ,"Human trafficking."
  ,"Child slavery."
  ,"Nailing your penis to your leg."
  ,"Hairy boobs."
  ,"A ball gag."
  ,"Forgetting the safety word."
  ,"Beating your wife into submission."
  ,"Bondage."
  ,"Unconscious drunk women."
  ,"Stretching your scrotum into your anus."
  ,"MILFs."
  ,"Mother-lover."
  ,"Stiff nipples."
  ,"Incontinence."
  ,"The man flu."
  ,"PMS (pre-menstrual syndrome)."
  ,"A used condom."
  ,"A threesome."
  ,"An orgy."
  ,"Cock rings."
  ,"Premature ejaculation."
  ,"Spank me!"
  ,"Homophobia."
  ,"Shooting blanks."
  ,"Epilepsy attack."
  ,"69 with a dwarf."
  ,"Cocaine."
  ,"Ketamine."
  ,"Steroids."
  ,"Bisexuals."
  ,"Turning gay."
  ,"A hot lady-boy."
  ,"Fishy fingers."
  ,"A freezer full of dead nurses."
  ,"Being frigid."
  ,"Menopause."
  ,"Projectile vomit."
  ,"A used tampon as a tea bag."
  ,"Prosecuting homosexuals."
  ,"Doggy style."
  ,"Missionary position."
  ,"Sleeping your way to the top."
  ,"An amputated penis."
  ,"LSD."
  ,"Virgin Mary."
  ,"The holocaust."
  ,"A calloused vagina."
  ,"Testosterone."
  ,"Exhibitionism."
  ,"Female facial hair."
  ,"Vomiting into your mouth and swallowing it again."
  ,"Swinging both ways."
  ,"Spooning."
  ,"Stalking."
  ,"Delayed ejaculation."
  ,"The walk of shame."
  ,"Muscle relaxants."
  ,"69."
  ,"Man boobs."
  ,"My penis."
  ,"Priests."
  ,"Lesbians."
  ,"Prison."
  ,"A bleeding anus."
  ,"Women."
  ,"Swallowing."
  ,"Abstinence."
  ,"Polygamy."
  ,"Eyeball licking."
  ,"Colon irrigation."
  ,"Santa Klaus."
  ,"A squirting orgasm."
  ,"Glow in the dark urine."
  ,"Breakfast of champions."
  ,"A gigantic turd."
  ,"A stutterer with turrets."
  ,"Hitler."
  ,"Adultery."
  ,"Numbing cream."
  ,"A ping pong show."
  ,"Failed suicide."
  ,"A deaf dominatrix."
  ,"Fantacide."
  ,"A frustrated psychopath."
  ,"That's what she said!"
  ,"Chlamydia."
  ,"Autoerotic asphyxiation."
  ,"Projectile diarrhoea on your face."
  ,"The morning after pill."
  ,"A broken vibrator."
  ,"Yeast infection."
  ,"An uncontrollable itch."
  ,"Pearl necklace."
  ,"Felching."
  ,"Several men ejaculating on a woman."
  ,"Turkish slap."
  ,"Rusty trombone."
  ,"Camel toe."
  ,"Daddy's little girl."
  ,"A wog."
  ,"A bloody pacifier."
  ,"Coughing into a vagina."
  ,"Clenched butt cheeks."
  ,"Eating an albino."
  ,"Insatiable bloodlust."
  ,"Just the tip."
  ,"Making the penises kiss."
  ,"Overpowering your father."
  ,"Ripping into a man's chest and pulling out his still-beating heart."
  ,"Scrotum tickling."
  ,"Sexy Siamese twins."
  ,"Stockholm Syndrome."
  ,"The hiccups."
  ,"A 55-gallon drum of lube."
  ,"A piñata full of scorpions."
  ,"Another shot of morphine."
  ,"Daddy's belt."
  ,"Pumping out a baby every nine months."
  ,"Taking a man's eyes and balls out and putting his eyes where his balls go and then his balls in the eye holes."
  ,"Weapons-grade plutonium."
  ,"David Attenborough watching us mate."
  ,"Electroejaculating a capuchin monkey."
  ,"Evolving a labyrinthine vagina."
  ,"Uranus."
  ,"The tiny, calloused hands of the Chinese children that made this card."
  ,"Santa's heavy sack."
  ,"Taking down Santa with a surface-to-air missile."
  ,"A magical tablet containing a world of unlimited pornography."
  ,"Being blind and deaf and having no limbs."
  ,"Breeding elves for their priceless semen."
  ,"Moses gargling Jesus's balls while Shiva and the Buddha penetrate his divine hand holes."
  ,"The Hawaiian goddess Kapo and her flying detachable vagina."
  ,"Pandora's vagina."
  ,"A surprising amount of hair."
  ,"A vagina that leads to another dimension."
  ,"Getting your dick stuck in a Chinese finger trap with another dick."
  ,"Having sex on top of a pizza."
  ,"Sneezing, farting, and coming at the same time."
  ,"The thin veneer of situational causality that underlies porn."
  ,"Vomiting mid-blowjob."
  ,"Warm, velvety muppet sex."
  ,"The primal, ball-slapping sex your parents are having right now."
  ,"10 Incredible Facts About the Anus."
  ,"Fucking a corpse back to life."
  ,"Injecting speed into one arm and horse tranquilizer into the other."
  ,"My sex dungeon."
  ,"Snorting coke off a clown's boner."
  ,"Some sort of Asian."
  ,"Stuffing a child's face with Fun Dip® until he starts having fun."
  ,"The safe word."
  ,"The secret formula for ultimate female satisfaction."
  ,"The tiniest shred of evidence that God is real."
  ,"A face full of horse cum."
  ,"Being paralyzed from the neck down."
  ,"Being worshipped as the one true God."
  ,"My first period."
  ,"Mom's new boyfriend."
  ,"Seeing things from Hitler's perspective."
  ,"Seeing my village burned and my family slaughtered before my eyes."
  ,"Slowly easing down onto a cucumber."
  ,"Unrelenting genital punishment."
  ,"Vegetarian options."
  ,"Breastfeeding a ten year old."
  ,"Ejaculating inside another man's wife."
  ,"Filling a man's anus with concrete."
  ,"Forgetting grandma's first name."
  ,"Growing up chained to a radiator in perpetual darkness."
  ,"Whatever you wish, mother."
  ,"Teaching a girl how to handjob the penis."
];