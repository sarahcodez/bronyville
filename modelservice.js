var app = angular.module('MyLittlePony');

app.service('modelService', function() {

	var Pony = function(ponyName, imgUrl) {
		this.name = ponyName;
		this.img = imgUrl;
	};

	var Fav = function(ponyName, imgUrl, userName) {
		this.name = ponyName;
		this.img = imgUrl;
		this.userName = userName;
	};

	var Flick = function(flickTitle, videoUrl, userName) {
		this.title = flickTitle;
		this.video = "https://www.youtube.com/embed/" + videoUrl;
		this.userName = userName;
	};

	var twilight = new Pony("Twilight Sparkle", "http://mylittlewiki.org/w/images/5/5f/Hub-twilight-sparkle.jpg");
	var applejack = new Pony("Applejack", "http://mylittlewiki.org/w/images/d/df/Hub-applejack.jpg");
	var fluttershy = new Pony("Fluttershy", "http://mylittlewiki.org/w/images/a/a5/Hub-fluttershy.jpg");
	var pinkie = new Pony("Pinkie Pie", "http://mylittlewiki.org/w/images/4/4a/Hub-pinkie-pie.jpg");
	var rainbow = new Pony("Rainbow Dash", "http://mylittlewiki.org/w/images/8/8a/Hub-rainbow-dash.jpg");
	var rarity = new Pony("Rarity", "http://mylittlewiki.org/w/images/4/48/Hub-rarity.jpg");
	var filthy = new Pony("Filthy Rich", "http://fc02.deviantart.net/fs70/i/2012/009/6/0/the_name__s_rich____filthy_rich__by_axemgr-d4lvvvz.png");
	var mayor = new Pony("Mayor Mare", "http://mlpforums.com/uploads/post_images/img-2973705-1-mayor_mare_revectorized_by_kna-d4v3hue.png");
	var photo = new Pony("Photo Finish", "http://fc01.deviantart.net/fs71/f/2011/229/9/e/photo_finish_vector_by_kooner01-d46utw3.png");
	var celestia = new Pony("Princess Celestia", "https://lh5.googleusercontent.com/-3z8MaGpvBYQ/U0NpGwU-P7I/AAAAAAAAAD0/BLyAcF4fJ4w/w875-h914/princess_celestia_by_kooner01-d50xbdc.png");
	var luna = new Pony("Princess Luna", "http://img4.wikia.nocookie.net/__cb20110915190107/mlp/images/4/48/Canterlot_Castle_Luna.png");
	var spike = new Pony("Spike", "http://vignette2.wikia.nocookie.net/mlp-gameloft/images/d/de/Spike.png/revision/latest?cb=20131227221502");
	var zecora = new Pony("Zecora", "http://th02.deviantart.net/fs70/PRE/i/2012/307/8/0/zecora_by_hawk9mm-d5bfzw0.png");
	var appleBloom = new Pony("Apple Bloom", "http://img1.wikia.nocookie.net/__cb20120205140653/mlp/images/0/08/Castle_Creator_Apple_Bloom.png");
	var sweetieBelle = new Pony("Sweetie Belle", "http://vignette3.wikia.nocookie.net/p__/images/3/38/CastleCreator_SweetieBelle.png/revision/latest?cb=20130920063113&path-prefix=protagonist");
	var scootaloo = new Pony ("Scootaloo", "http://img4.wikia.nocookie.net/__cb20120205142047/mlp/images/b/bb/CastleCreator_Scootaloo.png");
	var cheerilee = new Pony("Cheerilee", "http://mylittlewiki.org/w/images/e/ef/G4-cheerilee2.jpg");
	var diamond = new Pony("Diamond Dazzle Tiara", "http://th05.deviantart.net/fs70/PRE/f/2012/224/2/b/diamond_tiara_looking_back_by_metatiara-d522okt.png");
	var silver = new Pony("Silver Spoon", "http://vignette1.wikia.nocookie.net/mlp-gameloft/images/b/be/Silver_Spoon_vector.png/revision/latest?cb=20140112091121");
	var snipsy = new Pony("Snipsy Snap", "http://s3.amazonaws.com/bronibooru/sample/db181ad8dfb0a7594a16517a33549a31.jpg");
	var snailsquirm = new Pony("Snailsquirm", "http://img4.wikia.nocookie.net/__cb20150312205452/villains/images/0/0b/Snailsquirm.jpg");
	var twist = new Pony("Twist-a-Loo", "http://static.tvtropes.org/pmwiki/pub/images/Twist_Vector_4904.png");
	var nightmare = new Pony("Nightmare Moon", "http://th09.deviantart.net/fs70/PRE/i/2011/217/8/0/nightmare_moon_by_triox404-d45idzt.png");
	var gilda = new Pony("Gilda the Griffon", "http://img2.wikia.nocookie.net/__cb20130511222257/villains/images/0/00/GildaVector.png");
	var trixie = new Pony("Trixie Lulamoon", "http://img-cache.cdn.gaiaonline.com/1a0d9c59ac504ead3320dd5211ccb541/http://i4.photobucket.com/albums/y127/Morty340/My%20Little%20Pony%20OCs/Apocalypse%20Ponies/Former%20members/the_great_and_powerful_trixie_by_durpy-d4c5dy2.png");

	this.prePopulatedPonies = [twilight, applejack, fluttershy, pinkie, rainbow, rarity, filthy, mayor, photo, celestia, luna, spike, zecora, appleBloom, sweetieBelle, scootaloo, cheerilee, diamond, silver, snipsy, snailsquirm, twist, nightmare, gilda, trixie];


	var userFav1 = new Fav("Applejack", "http://img1.wikia.nocookie.net/__cb20121222123028/mlp/images/5/5e/Baby_Applejack_S3E8.png", "Shake It Like a Pony");
	var userFav2 = new Fav("Rainbow Dash", "http://img1.wikia.nocookie.net/__cb20140512165804/mlp/images/thumb/9/98/Rainbow%27s_Rainbow_Power_form_S4E26.png/1000px-Rainbow%27s_Rainbow_Power_form_S4E26.png", "Bronies over Hoenies")

	this.favPonies = [userFav1, userFav2];

	var userFlick1 = new Flick("Pinkie Pride - Speed Up!", "7FKrINtX_AI", "Stallion007");
	var userFlick2 = new Flick("The Cutie Mark Vault", "e5Ubt3CmyiA", "Bronius Maximus");

	this.favFlicks = [userFlick1, userFlick2];

});