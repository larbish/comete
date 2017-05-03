angular.module('app')

	.controller('ProgrammationController', function (AppService, $rootScope, $scope, $uibModal) {
		var vm = this;

		var imgPath = 'img/programmation/artists/';


		vm.toggleNav = function () {
			AppService.toggleNav();
		}

		vm.showArtist = function (artist) {
			$uibModal.open({
				size: 'lg',
				templateUrl: 'programmation/artist.html',
				controller: 'ArtistController as vm',
				animation: true,
				resolve: {
					artist: function () { return vm.artists[artist] }
				}
			});
		};

		vm.artists = {
			'aglaska': {
				'name': 'Aglaska',
				'text': "Sur les steppes, les galaxies, aglaska vogue. Un bâteau ivre, longtemps sans cap, sans horizon. L'univers comme limite, l'imaginaire comme sextan. Celui de trois navigateurs rêveurs qui emmènent avec eux leurs auditeurs dans des pérégrinations sonores. Son premier EP, vwayaj , sorti en 2015, était le témoignage illuminé de leur dernière expédition, son second Imaginaires de la catastrophe sera le récit onirique d’un périple à l’univers mythologique.",
				'img': imgPath + 'Aglaska.png'
			},
			'bambounou': {
				'name': 'Bambounou',
				'text': "Jeremy Guindo aka Bambounou s’est rapidement imposé comme l’un des producteurs/djs les plus prometteurs de la scène house et techno européenne. Sur Centrum son nouvel opus, le jeune producteur parisien passe d’une house fiévreuse à une techno précise et ultra contemporaine, n’oubliant pas d’y incorporer des sonorités break, garage, experimental et ambient, comme il en a le secret.",
				'img': imgPath + 'Bambounou.png'
			},
			'camionB': {
				'name': 'Camion Bazar',
				'text': 'Du son qui groove, des performances musicales éclectiques uniques, un décor déjanté avec une équipe de freaks déguisés qui font n’importe quoi, le tout autour d’un fourgon DJ booth : vous êtes bien au Camion Bazar ! Et il paraît que ça se déplace de fête en fête. Eh bien oui, di!cile de nous arrêter : on est la petite scène en roue libre qui fait du bien à ton festival aux grandes scènes. On est le joyeux tapis roulant chaotique de ta petite fête underground. On est une équipe de gais lurons qui décomplexent le public, pour un résultat des plus festifs !',
				'img': imgPath + 'CamionB.png'
			},
			'colJ': {
				'name': 'Col J',
				'text': "Musicien, dj-producteur de la scène Française actuelle. C’est derrière les  ​platines  vinyles qu’il découvre la joie des envolées musicales face au public. Parfait autodidacte, il se consacre depuis à ses propres créations, dans son home studio entouré de ​claviers et machines en tout genre. Ainsi il développe sa propre identité au travers de ses prestations, prêt à vous délivrer un live analogique. House Techno aux sonorités rythmées et mélodieuses, dont lui seul a le secret.",
				'img': imgPath + 'ColJ.png'
			},
			'desmondD': {
				'name': 'Desmond Mayers',
				'text': "Mars 1992, Caroline du Nord, USA : Desmond Myers rêve d’ailleurs. Il gratte ses premiers accords en écoutant la collection de vinyles de son père : du rock des années 60/70, du blues… Quelques années plus tard, il a une nouvelle révélation en découvrant le rap et le RnB de OutKast, Mos Def ou Anthony Hamilton.",
				'img': imgPath + 'DesmondM.png'
			},
			'einleit': {
				'name': 'Einleit',
				'text': "Cinq ans après ses débuts, « Lovers Be Alert » annonce la renaissance d’Einleit. Le premier album de l'artiste franco-japonais, prévu pour octobre 2017, sera sans conteste sa création la plus ambitieuse. Jun Suzuki y libère ses démons au sein d’un disque ambitieux et conquérant, délivré avec une implacable rigueur et une sérénité troublante, qui inspire autant la crainte que la fascination. Tout comme l’or noir, la musique d’Einleit est à éloigner du feu, sous risque d’embrasement. Avis alors aux pyromanes de s’y risquer !",
				'img': imgPath + 'Einleit.png'
			},
			'gramophilesC': {
				'name': 'Gramophiles Crew',
				'text': "Duo complice à la musique multicolore, Gramophiles propage depuis 2014 des ondes hip-hop, africaines, caribéennes et sud-américaines. Véritable amoureux de musique, Adrien & Simon puisent sur chaque continent un nectar qu’ils vous servent avec passion et insouciance ! Leurs sets sans frontière entrainent irrésistiblement les corps dansants au milieu d’un jardin sonore. Happy place pour oiseaux de nuit!",
				'img': imgPath + 'GramophilesC.png'
			},
			'houseOfM': {
				'name': 'House Of Moda',
				'text': "Depuis 2011, la House Of Moda réveille la Diva qui sommeille en chacun de nous. Inspirés par la scène voguing new-yorkaise et par l'imagerie de clubs mythiques comme Le Palace, Crame et Reno, fondateurs de la soirée, invitent tous les mois club kids, drag queens et autres créatures à venir parader et danser sur des thèmes tels que Erotica, Futuristica, Diva des Cavernes, Belle en Poubelle... Musique éclectique à tendance électronique, elle fait bouger tous les mois le dancefloor de La Java, et s'exporte à Marseille, Berlin, Nantes...",
				'img': imgPath + 'HouseofM.png'
			},
			'isaacD': {
				'name': 'Isaac Delusion',
				'text': "En bon fils de la french touch, héritiers folk, aficionados hip-hop et enfants de la nuit, le duo fait rapidement valoir sa vision personnelle de la pop, avec grâce et candeur d'esprit. Dans un univers onirique où la voix de Loic, pétrie d'une émotion palpable, rencontre le savoir faire électronique de Jules, mêlé aux basses de Nicolas, et à la virtuosité multi-instrumentiste de Bastien, la musique d'Isaac Delusion célèbre l'union du rêveur et du somnambule.",
				'img': imgPath + 'IsaacD.png'
			},
			'judy': {
				'name': 'Judy',
				'text': 'Basses aquatiques, rythmiques trap et gimmicks de claviers astucieux, le tout emballé par une production au minimalisme bienvenue, valorisant des mélodies ne cherchant pas toujours l’évidence. A la manoeuvre, on trouve Charlie, énigmatique compositeur qui prête sa voix mélancolique au projet, appuyé par une rythmique solide ultra précieuse en live : le groove des quatre cordes de Léo et la subtile frappe de Jérôme viennent en effet habiter chaque titre.',
				'img': imgPath + 'Judy.png'
			},
			'koraJ': {
				'name': 'Kora Jamson',
				'text': "Influencée par des artistes tels que Nneka, Selah Sue ou Patrice, Kora Jamson dévoile dans ce premier EP six titres organiques à l’authenticité rare, et entièrement enregistrés live. Entre reggae, soul, pop et afro- beat, la musique de Kora Jamson est comme un rayon de soleil un soir d’été, une douce invitation à la mélancolie.",
				'img': imgPath + 'KoraJ.png'
			},
			'kudiwa': {
				'name': 'Kudiwa',
				'text': "Cette jeune formation va vous étonner par son énergie sonore et sa richesse mélodique. Porté par la voix de Kelly Carpaye, soul sister à la Ayo ou Lauryn Hill, le band s'affranchit des étiquettes et fait le voyage entre Soul, Hip Hop et Jazz sans coquetterie mais avec précision, sensualité et panache !",
				'img': imgPath + 'Kudiwa.png'
			},
			'lazareH': {
				'name': 'Lazare Hoche',
				'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
				'img': imgPath + 'LazareH.png'
			},
			'moneyP': {
				'name': 'Money Penny',
				'text': "Djette parisienne aux multiples vies. C’est son mentor Peter Pan - Alexandre Grynszpan membre du duo Polo & Pan - qui lui a insufflé l'amour du rythme. Elle écume rooftops et bars parisiens pour captiver les plus insatiables noctambules de ses influences disco, funk & afro.",
				'img': imgPath + 'MoneyP.png'
			},
			'paradis': {
				'name': 'Paradis',
				'text': "A chaque fois l’aura de Paradis a grandi et le duo s’est doucement installé comme l’un des meilleurs espoirs de la scène hexagonale. Pierre aime la musique expressive, explore alors les mythes libérateurs du disco et du garage : West End Records, Arthur Russell, David Mancuso … Simon, lui, est dans le triste, minimaliste : la techno allemande du label Dial, le sampling mélancolique de Dj Cam.",
				'img': imgPath + 'Paradis.png'
			},
			'rituel': {
				'name': 'Rituel',
				'text': "Véritable cabinet de curiosités et de rencontre RITUEL oeuvre à procurer des moments hors du temps dans des lieux atypiques de la capitale parisienne. Mené par trois amis d’enfance et regroupant aujourd’hui plusieurs artistes, plasticiens, designers et djs/producteurs RITUEL a pour vocation première la rencontre festive de l’art et de la spiritualité. Présents et demandés aujourd’hui par des festivals en France et en Europe pour leur univers polymorphe, ce collectif nomade investit et transforme les espaces qu’ils occupent avec décoration, scénographie, live music, shiatsu, cartomancie ou encore marché artistique.",
				'img': imgPath + 'Rituel.png'
			},
			'romainD': {
				'name': 'Romain Dafalgang',
				'text': "Jeune loup au sein de Horde et moitié du projet Tanière, Romain Dafalgang a développé un style de mix tout à son image : joyeux, chaloupé et schizophrène. Extraverti, il s’intéresse à tous les styles et aime les mélanger pour capter l’énergie du public.  Alternant sonorités funk / disco avec des sons plus bruts comme la ghetto house, une pointe de techno voire de la bass music, il vous transmettra son énergie bondissante à travers une sélection judicieuse et des transitions pertinentes.",
				'img': imgPath + 'RomainD.png'
			},
			'secretValueO': {
				'name': 'Secret Value Orchestra',
				'text': "Le groupe est composé de Larry Houl à la voix, Flabaire à la basse, Paul Cut au clavier, ainsi que Mud Deep et Monsieur Popo aux boîtes à rythmes. Ils créent à eux cinq une atmosphère house tintée de funk, de jazz et de soul.",
				'img': imgPath + 'SecretValueO.png'
			},
			'teachKidsM': {
				'name': 'Teach Kids Manners',
				'text': "Le timbre chaleureux de Gillian contraste avec l’acidité de son clavier et l’efficacité de sa programmation rythmique. La danse frénétique de Louise vient pimenter avec panache une voix aérienne et envoutante. Tandis que Gauthier fait virevolter et groover guitares et basses. Leur influences : Portishead et d’Erykah Badu, les demi-frangins de Little Dragon et Frank Ocean, les cousins de Hiatus Kaiyote et James Blake.",
				'img': imgPath + 'TeachKidsM.png'
			}
		}
	});
