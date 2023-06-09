'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = [
      {'firstName':'Redford','fatherLastName':'Crimes','motherLastName':'Burehill','birthDate':'1985-12-22T04:11:46Z','email':'rburehill0@yale.edu','phone':'6777232402','available':false},
      {'firstName':'Christan','fatherLastName':'Romayne','motherLastName':'Dockrill','birthDate':'2002-11-01T01:15:05Z','email':'cdockrill1@sciencedaily.com','phone':'7781199819','available':true},
      {'firstName':'Delaney','fatherLastName':'DAmbrogio','motherLastName':'Collin','birthDate':'2011-09-12T02:26:50Z','email':'dcollin2@blogtalkradio.com','phone':'2955614335','available':true},
      {'firstName':'Rafa','fatherLastName':'Farbrother','motherLastName':'Godbolt','birthDate':'1985-12-09T07:45:18Z','email':'rgodbolt3@webeden.co.uk','phone':'9136161223','available':false},
      {'firstName':'Eleonore','fatherLastName':'Hadigate','motherLastName':'Percifull','birthDate':'1986-04-18T05:09:06Z','email':'epercifull4@devhub.com','phone':'3804495031','available':false},
      {'firstName':'Nickolai','fatherLastName':'Yurenin','motherLastName':'St Louis','birthDate':'2015-10-19T02:36:30Z','email':'nstlouis5@scientificamerican.com','phone':'5044401569','available':false},
      {'firstName':'Rosie','fatherLastName':'Rickardsson','motherLastName':'Krollmann','birthDate':'1985-04-22T20:18:48Z','email':'rkrollmann6@fastcompany.com','phone':'1116949739','available':false},
      {'firstName':'Rick','fatherLastName':'Cobbin','motherLastName':'Stoffersen','birthDate':'1978-07-07T17:34:16Z','email':'rstoffersen7@adobe.com','phone':'4064127989','available':true},
      {'firstName':'Andeee','fatherLastName':'Poncet','motherLastName':'Tiner','birthDate':'2008-10-27T11:52:29Z','email':'atiner8@yelp.com','phone':'9917724203','available':false},
      {'firstName':'Celinka','fatherLastName':'Gertray','motherLastName':'Jagg','birthDate':'1975-03-09T02:44:04Z','email':'cjagg9@mtv.com','phone':'3816375337','available':true},
      {'firstName':'Ethel','fatherLastName':'Erskine Sandys','motherLastName':'Klemensiewicz','birthDate':'2007-12-13T02:55:20Z','email':'eklemensiewicza@icio.us','phone':'9314113133','available':true},
      {'firstName':'Milty','fatherLastName':'Di Pietro','motherLastName':'DArrigo','birthDate':'1995-05-11T04:11:45Z','email':'mdarrigob@topsy.com','phone':'5153381838','available':true},
      {'firstName':'Constantin','fatherLastName':'Juan','motherLastName':'Arnson','birthDate':'1964-07-02T03:45:30Z','email':'carnsonc@tripod.com','phone':'5673406506','available':true},
      {'firstName':'Cad','fatherLastName':'Grey','motherLastName':'McMearty','birthDate':'1962-04-27T14:47:40Z','email':'cmcmeartyd@parallels.com','phone':'1412266850','available':true},
      {'firstName':'Marybeth','fatherLastName':'Chartre','motherLastName':'Steer','birthDate':'2014-02-16T17:35:54Z','email':'msteere@princeton.edu','phone':'5083726970','available':true},
      {'firstName':'Nikolaos','fatherLastName':'Marling','motherLastName':'Piele','birthDate':'1973-12-31T02:59:19Z','email':'npielef@jimdo.com','phone':'9139347451','available':true},
      {'firstName':'Shir','fatherLastName':'Sottell','motherLastName':'Wasselin','birthDate':'2005-12-11T15:45:20Z','email':'swasseling@ifeng.com','phone':'9298981970','available':false},
      {'firstName':'Merrick','fatherLastName':'Shillaber','motherLastName':'Duckers','birthDate':'1961-09-10T23:01:12Z','email':'mduckersh@google.fr','phone':'1984563090','available':false},
      {'firstName':'Pattin','fatherLastName':'Pidcock','motherLastName':'Dugdale','birthDate':'1992-11-14T12:21:14Z','email':'pdugdalei@cam.ac.uk','phone':'1659318095','available':false},
      {'firstName':'Hedi','fatherLastName':'Hariot','motherLastName':'Trighton','birthDate':'1995-06-28T15:22:34Z','email':'htrightonj@jugem.jp','phone':'6504530866','available':false},
      {'firstName':'Happy','fatherLastName':'Guerre','motherLastName':'Coda','birthDate':'1961-05-29T16:50:20Z','email':'hcodak@hud.gov','phone':'6486469291','available':true},
      {'firstName':'Mahmud','fatherLastName':'Aggis','motherLastName':'Bubear','birthDate':'1971-07-02T02:00:13Z','email':'mbubearl@tripadvisor.com','phone':'8644571413','available':false},
      {'firstName':'Elias','fatherLastName':'Keford','motherLastName':'Castillon','birthDate':'2013-08-01T14:52:53Z','email':'ecastillonm@discuz.net','phone':'3545660010','available':false},
      {'firstName':'Aveline','fatherLastName':'Farfalameev','motherLastName':'Djurevic','birthDate':'1983-07-16T01:58:08Z','email':'adjurevicn@twitter.com','phone':'7922087979','available':true},
      {'firstName':'Moishe','fatherLastName':'Hune','motherLastName':'Bramah','birthDate':'1998-10-26T07:54:30Z','email':'mbramaho@parallels.com','phone':'4433635601','available':false},
      {'firstName':'Malissa','fatherLastName':'McCurtin','motherLastName':'Hexter','birthDate':'1967-05-14T10:48:57Z','email':'mhexterp@unesco.org','phone':'8605199818','available':true},
      {'firstName':'Baron','fatherLastName':'Kenset','motherLastName':'Harland','birthDate':'1994-10-18T17:45:29Z','email':'bharlandq@twitpic.com','phone':'6313104298','available':false},
      {'firstName':'Ebony','fatherLastName':'Maleby','motherLastName':'Hurich','birthDate':'2003-11-07T07:33:16Z','email':'ehurichr@godaddy.com','phone':'7144218793','available':false},
      {'firstName':'Barnabas','fatherLastName':'Wagerfield','motherLastName':'McGiff','birthDate':'1993-08-06T10:56:48Z','email':'bmcgiffs@opensource.org','phone':'5364731408','available':false},
      {'firstName':'Dara','fatherLastName':'Ricart','motherLastName':'Swabey','birthDate':'2004-11-29T22:39:02Z','email':'dswabeyt@i2i.jp','phone':'5987249129','available':true},
      {'firstName':'Minny','fatherLastName':'Shacklady','motherLastName':'Treasure','birthDate':'1975-04-16T14:02:12Z','email':'mtreasureu@a8.net','phone':'8117480067','available':false},
      {'firstName':'Sarge','fatherLastName':'Arlidge','motherLastName':'Blas','birthDate':'1988-10-26T11:04:53Z','email':'sblasv@irs.gov','phone':'3866308703','available':true},
      {'firstName':'Marten','fatherLastName':'Durram','motherLastName':'Brugmann','birthDate':'1961-02-17T02:10:31Z','email':'mbrugmannw@youku.com','phone':'1924752869','available':true},
      {'firstName':'Filip','fatherLastName':'Franzonetti','motherLastName':'Sawle','birthDate':'1992-05-03T16:30:51Z','email':'fsawlex@so-net.ne.jp','phone':'8052967797','available':false},
      {'firstName':'Ham','fatherLastName':'Shallcross','motherLastName':'Hubbins','birthDate':'2009-03-14T03:18:03Z','email':'hhubbinsy@dion.ne.jp','phone':'1661137061','available':false},
      {'firstName':'Poul','fatherLastName':'Glynn','motherLastName':'Alexandersen','birthDate':'2015-04-10T08:43:14Z','email':'palexandersenz@smugmug.com','phone':'7204611963','available':true},
      {'firstName':'Jervis','fatherLastName':'Maddern','motherLastName':'Anstis','birthDate':'1994-02-01T17:24:43Z','email':'janstis10@t-online.de','phone':'4397913570','available':true},
      {'firstName':'Ema','fatherLastName':'Bilston','motherLastName':'Du Hamel','birthDate':'1989-07-28T11:45:01Z','email':'eduhamel11@cisco.com','phone':'8015992601','available':true},
      {'firstName':'Dimitry','fatherLastName':'Fairhead','motherLastName':'Rucklesse','birthDate':'1964-07-26T17:46:26Z','email':'drucklesse12@tripadvisor.com','phone':'1334361314','available':false},
      {'firstName':'Glyn','fatherLastName':'Dorrian','motherLastName':'Jovicic','birthDate':'2004-09-17T11:08:28Z','email':'gjovicic13@pbs.org','phone':'3588946460','available':false},
      {'firstName':'Clareta','fatherLastName':'Twizell','motherLastName':'Deacon','birthDate':'2003-09-15T03:16:55Z','email':'cdeacon14@spotify.com','phone':'7843400004','available':true},
      {'firstName':'Tiphany','fatherLastName':'Corr','motherLastName':'Jerke','birthDate':'2012-07-08T21:09:30Z','email':'tjerke15@independent.co.uk','phone':'7874807355','available':false},
      {'firstName':'Kearney','fatherLastName':'Camel','motherLastName':'Bannard','birthDate':'1961-03-28T09:46:42Z','email':'kbannard16@ft.com','phone':'6454925755','available':false},
      {'firstName':'Leontine','fatherLastName':'Aingell','motherLastName':'Summersby','birthDate':'2003-05-29T02:15:00Z','email':'lsummersby17@cpanel.net','phone':'6482670600','available':true},
      {'firstName':'Tadio','fatherLastName':'Oulett','motherLastName':'Gath','birthDate':'2007-07-29T15:22:37Z','email':'tgath18@vk.com','phone':'2935057430','available':false},
      {'firstName':'Brennen','fatherLastName':'McRobb','motherLastName':'Duigenan','birthDate':'1993-11-07T05:49:17Z','email':'bduigenan19@who.int','phone':'2071384047','available':true},
      {'firstName':'Maureen','fatherLastName':'Haxbie','motherLastName':'Welldrake','birthDate':'2006-10-08T19:17:41Z','email':'mwelldrake1a@newyorker.com','phone':'3432097882','available':false},
      {'firstName':'Beverlie','fatherLastName':'Berdale','motherLastName':'Balcock','birthDate':'1977-10-12T21:54:51Z','email':'bbalcock1b@bluehost.com','phone':'9604642882','available':false},
      {'firstName':'Arlyn','fatherLastName':'Teare','motherLastName':'Pattillo','birthDate':'1997-12-01T18:54:51Z','email':'apattillo1c@unicef.org','phone':'5566887342','available':false},
      {'firstName':'Monro','fatherLastName':'Andree','motherLastName':'Insole','birthDate':'2006-11-29T23:32:45Z','email':'minsole1d@altervista.org','phone':'7209810678','available':false},
      {'firstName':'Hewe','fatherLastName':'Bugge','motherLastName':'Marchant','birthDate':'1990-06-16T04:51:41Z','email':'hmarchant1e@shareasale.com','phone':'4533868535','available':false},
      {'firstName':'Mora','fatherLastName':'OCleary','motherLastName':'Danahar','birthDate':'1985-08-15T13:00:01Z','email':'mdanahar1f@patch.com','phone':'2492089326','available':true},
      {'firstName':'Georg','fatherLastName':'Skelhorn','motherLastName':'Font','birthDate':'1968-03-16T17:07:31Z','email':'gfont1g@imageshack.us','phone':'7754780299','available':true},
      {'firstName':'Philip','fatherLastName':'Kassel','motherLastName':'Rubinsohn','birthDate':'2005-07-12T05:32:16Z','email':'prubinsohn1h@china.com.cn','phone':'1811406165','available':false},
      {'firstName':'Bettine','fatherLastName':'Castiglione','motherLastName':'Dowbiggin','birthDate':'1965-04-21T14:11:58Z','email':'bdowbiggin1i@photobucket.com','phone':'1385081871','available':true},
      {'firstName':'Ole','fatherLastName':'Strutton','motherLastName':'Yitzhakov','birthDate':'2008-08-10T04:03:02Z','email':'oyitzhakov1j@privacy.gov.au','phone':'5137739672','available':true},
      {'firstName':'Kenon','fatherLastName':'Bunstone','motherLastName':'Howship','birthDate':'2010-08-24T07:54:32Z','email':'khowship1k@ft.com','phone':'8167039440','available':false},
      {'firstName':'Mariquilla','fatherLastName':'Tewkesbury.','motherLastName':'Porcher','birthDate':'1991-05-03T13:28:44Z','email':'mporcher1l@ca.gov','phone':'7703913296','available':true},
      {'firstName':'Abbie','fatherLastName':'Gerler','motherLastName':'Onele','birthDate':'1992-01-04T02:32:12Z','email':'aonele1m@illinois.edu','phone':'7036771393','available':true},
      {'firstName':'Beale','fatherLastName':'Charlwood','motherLastName':'Raith','birthDate':'1987-09-14T15:01:33Z','email':'braith1n@ycombinator.com','phone':'4055229438','available':false},
      {'firstName':'Sherwood','fatherLastName':'Matresse','motherLastName':'Juggins','birthDate':'2010-11-17T21:16:29Z','email':'sjuggins1o@ucla.edu','phone':'1112590522','available':true},
      {'firstName':'Frannie','fatherLastName':'McInerney','motherLastName':'McCandless','birthDate':'1972-10-20T21:53:02Z','email':'fmccandless1p@ameblo.jp','phone':'9328869486','available':false},
      {'firstName':'Xylina','fatherLastName':'Elwin','motherLastName':'Klimontovich','birthDate':'1966-06-19T23:44:22Z','email':'xklimontovich1q@cdbaby.com','phone':'7833668919','available':false},
      {'firstName':'Hendrika','fatherLastName':'Gonning','motherLastName':'Mugg','birthDate':'1994-11-18T10:12:48Z','email':'hmugg1r@1688.com','phone':'1745179414','available':false},
      {'firstName':'Ingemar','fatherLastName':'Dudman','motherLastName':'Baldacco','birthDate':'1987-12-14T16:07:01Z','email':'ibaldacco1s@last.fm','phone':'5187081373','available':false},
      {'firstName':'Prissie','fatherLastName':'Gilfoy','motherLastName':'Ferguson','birthDate':'1990-02-11T09:10:29Z','email':'pferguson1t@jiathis.com','phone':'7528173567','available':true},
      {'firstName':'Merrile','fatherLastName':'Pond','motherLastName':'Elcock','birthDate':'1986-10-31T09:55:57Z','email':'melcock1u@alibaba.com','phone':'9715810697','available':false},
      {'firstName':'Ansley','fatherLastName':'Gluyus','motherLastName':'Burbudge','birthDate':'1990-04-22T20:16:17Z','email':'aburbudge1v@360.cn','phone':'4531287565','available':false},
      {'firstName':'Kiley','fatherLastName':'Gagg','motherLastName':'Gerger','birthDate':'2007-04-12T06:45:05Z','email':'kgerger1w@posterous.com','phone':'6354526983','available':true},
      {'firstName':'Lettie','fatherLastName':'Denisyuk','motherLastName':'Cowell','birthDate':'2004-03-27T03:33:41Z','email':'lcowell1x@biblegateway.com','phone':'8212493384','available':false},
      {'firstName':'Forster','fatherLastName':'Rushford','motherLastName':'Wollacott','birthDate':'1964-08-05T04:07:22Z','email':'fwollacott1y@edublogs.org','phone':'1739993374','available':true},
      {'firstName':'Tally','fatherLastName':'Goodsall','motherLastName':'Speak','birthDate':'1994-04-10T07:20:42Z','email':'tspeak1z@google.co.jp','phone':'5462731980','available':true},
      {'firstName':'Stavro','fatherLastName':'Chaldecott','motherLastName':'Shapero','birthDate':'1968-07-11T22:22:52Z','email':'sshapero20@fema.gov','phone':'3532396443','available':false},
      {'firstName':'Byron','fatherLastName':'Gilbert','motherLastName':'Kuzma','birthDate':'1997-03-02T23:30:27Z','email':'bkuzma21@yale.edu','phone':'1554824507','available':false},
      {'firstName':'Gilberta','fatherLastName':'Sapp','motherLastName':'Townend','birthDate':'2005-12-26T10:45:45Z','email':'gtownend22@photobucket.com','phone':'4306094362','available':true},
      {'firstName':'Mame','fatherLastName':'Lilbourne','motherLastName':'Steinhammer','birthDate':'1987-11-21T14:12:17Z','email':'msteinhammer23@godaddy.com','phone':'6357756521','available':true},
      {'firstName':'Cortie','fatherLastName':'Bardill','motherLastName':'Friatt','birthDate':'1968-06-02T23:06:48Z','email':'cfriatt24@tinyurl.com','phone':'1815281150','available':false},
      {'firstName':'Verile','fatherLastName':'Dotterill','motherLastName':'Batter','birthDate':'1964-02-01T15:11:13Z','email':'vbatter25@go.com','phone':'4612599073','available':false},
      {'firstName':'Aldon','fatherLastName':'Whillock','motherLastName':'Dreini','birthDate':'1964-11-22T06:35:16Z','email':'adreini26@flavors.me','phone':'3972978913','available':false},
      {'firstName':'Jaymee','fatherLastName':'Jouen','motherLastName':'Pirrey','birthDate':'2005-07-15T07:12:34Z','email':'jpirrey27@slate.com','phone':'6337832451','available':false},
      {'firstName':'Averil','fatherLastName':'Geraghty','motherLastName':'Penke','birthDate':'1971-12-18T07:41:23Z','email':'apenke28@usa.gov','phone':'3823569834','available':true},
      {'firstName':'Deonne','fatherLastName':'McDermot','motherLastName':'Verni','birthDate':'1967-07-30T11:26:21Z','email':'dverni29@kickstarter.com','phone':'4369485973','available':true},
      {'firstName':'Leroi','fatherLastName':'Le Count','motherLastName':'Normand','birthDate':'1962-11-12T10:32:48Z','email':'lnormand2a@deviantart.com','phone':'6438209898','available':true},
      {'firstName':'Valeria','fatherLastName':'Murie','motherLastName':'Sperski','birthDate':'1970-04-19T22:37:54Z','email':'vsperski2b@bing.com','phone':'7471048361','available':false},
      {'firstName':'Tobin','fatherLastName':'Oppie','motherLastName':'Roycroft','birthDate':'1997-09-19T11:39:38Z','email':'troycroft2c@ebay.com','phone':'2425368615','available':true},
      {'firstName':'Normand','fatherLastName':'Kenset','motherLastName':'Gerrans','birthDate':'1997-08-01T20:12:47Z','email':'ngerrans2d@example.com','phone':'2061431270','available':true},
      {'firstName':'Terese','fatherLastName':'LLelweln','motherLastName':'Tittletross','birthDate':'1976-03-16T00:58:21Z','email':'ttittletross2e@ovh.net','phone':'5707302951','available':false},
      {'firstName':'Karlie','fatherLastName':'Menico','motherLastName':'Ellens','birthDate':'1970-07-18T19:30:34Z','email':'kellens2f@4shared.com','phone':'2104235486','available':false},
      {'firstName':'Dillon','fatherLastName':'Gilyatt','motherLastName':'Bardsley','birthDate':'1966-02-25T17:47:39Z','email':'dbardsley2g@illinois.edu','phone':'9182895214','available':true},
      {'firstName':'Christina','fatherLastName':'Treslove','motherLastName':'Shackleford','birthDate':'1998-06-26T00:42:53Z','email':'cshackleford2h@newyorker.com','phone':'6826326467','available':false},
      {'firstName':'Ber','fatherLastName':'Tooth','motherLastName':'Heinreich','birthDate':'1995-09-09T10:54:34Z','email':'bheinreich2i@shutterfly.com','phone':'1574359714','available':true},
      {'firstName':'Derrik','fatherLastName':'McLeman','motherLastName':'Halloran','birthDate':'2006-06-20T18:08:15Z','email':'dhalloran2j@biglobe.ne.jp','phone':'4768898814','available':false},
      {'firstName':'Carolann','fatherLastName':'Eayrs','motherLastName':'Itskovitz','birthDate':'1983-03-28T23:13:17Z','email':'citskovitz2k@ed.gov','phone':'7194781812','available':true},
      {'firstName':'Fax','fatherLastName':'Flanagan','motherLastName':'Shotton','birthDate':'1979-03-26T10:29:54Z','email':'fshotton2l@tripadvisor.com','phone':'5604809809','available':false},
      {'firstName':'Randie','fatherLastName':'Kivell','motherLastName':'Pawelczyk','birthDate':'1990-01-29T08:52:51Z','email':'rpawelczyk2m@1688.com','phone':'9729052143','available':true},
      {'firstName':'Nancee','fatherLastName':'Hornung','motherLastName':'Ray','birthDate':'1973-03-28T11:27:41Z','email':'nray2n@economist.com','phone':'5009053359','available':false},
      {'firstName':'Mattheus','fatherLastName':'Mabbett','motherLastName':'Waryk','birthDate':'1974-11-21T04:43:39Z','email':'mwaryk2o@example.com','phone':'3678364395','available':true},
      {'firstName':'Donovan','fatherLastName':'Creed','motherLastName':'Kirwan','birthDate':'2000-01-04T08:49:21Z','email':'dkirwan2p@reuters.com','phone':'3137385603','available':false},
      {'firstName':'Gradeigh','fatherLastName':'ODocherty','motherLastName':'Feetham','birthDate':'1961-11-22T04:17:14Z','email':'gfeetham2q@unesco.org','phone':'1964149615','available':true},
      {'firstName':'Reider','fatherLastName':'Berry','motherLastName':'Bishell','birthDate':'1995-04-15T21:48:01Z','email':'rbishell2r@foxnews.com','phone':'7616537404','available':true}];
    const payload = data.map(row => ({...row, createdAt: new Date(), updatedAt: new Date()}));
    await queryInterface.bulkInsert('readers', payload, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('readers', null, {});
  }
};
