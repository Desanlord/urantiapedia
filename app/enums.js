exports.LaTeXSeparator = {
	TITLE_START: '\\title{',
	CHAPTER_START: '\\chapter{',
	SECTION_START: '\\section*{',
	PAR_START: '\\par',
	TEXT_START: '\\textsuperscript{',
	FOOTNOTE_START: '\\footnote{',
	ITALIC_START: '\\textit{',
	PAGEREF_START: '%\\textsuperscript{(',
	PAGEREF_END: ')}',
	END: '}'
}

//TODO: Libros que nos faltan:
// Macabeos I y II, Eclesiástico, Sabiduría, Historia de Bel y el Dragón,
// Oración de Manasés, Tobit, Enoc, Asunción de Moisés

exports.BibleAbb = {
	'Gn': 'Génesis',
	'Ex': 'Éxodo',
	'Lv': 'Levítico',
	'Nm': 'Números',
	'Dt': 'Deuteronomio',
	'Jos':'Josué',
	'Jue': 'Jueces',
	'Rt': 'Rut',
	'1 S': 'Samuel I',
	'2 S': 'Samuel II',
	'1 R': 'Reyes I',
	'2 R': 'Reyes II',
	'1 Cr': 'Crónicas I',
	'2 Cr': 'Crónicas II',
	'Esd': 'Esdras',
	'Neh': 'Nehemías',
	'Est': 'Ester',
	'1 Mac': 'Macabeos I',
	'2 Mac': 'Macabeos II',
	'Job': 'Job',
	'Sal': 'Salmos',
	'Pr': 'Proverbios',
	'Ec': 'Eclesiastés',
	'Cnt': 'Cantar de los Cantares',
	'Eclo': 'Eclesiásitco',
	'Sab': 'Sabiduría',
	'Is': 'Isaías',
	'Jer': 'Jeremías',
	'Lm': 'Lamentaciones de Jeremías',
	'Bar': 'Baruc',
	'Ez': 'Ezequiel',
	'Dn': 'Daniel',
	'Os': 'Oseas',
	'Jl': 'Joel',
	'Am': 'Amós',
	'Abd': 'Abdías',
	'Jon': 'Jonás',
	'Miq': 'Miqueas',
	'Nah': 'Nahum',
	'Hab': 'Habacuc',
	'Sof': 'Sofonías',
	'Hag': 'Hageo',
	'Zac': 'Zacarías',
	'Mal': 'Malaquías',
	'Mt': 'Evangelio de Mateo',
	'Mc': 'Evangelio de Marcos',
	'Lc': 'Evangelio de Lucas',
	'Jn': 'Evangelio de Juan',
	'Hch': 'Hechos de los Apóstoles',
	'Ro': 'Epístola a los Romanos',
	'1 Co': 'Epístola a los Corintios I',
	'2 Co': 'Epístola a los Corintios II',
	'Gl': 'Epístola a los Gálatas',
	'Ef': 'Epístola a los Efesios',
	'Flp': 'Epístola a los Filipenses',
	'Col': 'Epístola a los Colosenses',
	'1 Ts': 'Epístola a los Tesalonicenses I',
	'2 Ts': 'Epístola a los Tesalonicenses II',
	'1 Ti': 'Epístola a Timoteo I',
	'2 Ti': 'Epístola a Timoteo II',
	'Tit': 'Epístola a Tito',
	'Flm': 'Epístola a Filemón',
	'Heb': 'Epístola a los Hebreos',
	'Stg': 'Epístola de Santiago',
	'1 P': 'Epístola de Pedro I',
	'2 P': 'Epístola de Pedro II',
	'1 Jn': 'Epístola de Juan I',
	'2 Jn': 'Epístola de Juan II',
	'3 Jn': 'Epístola de Juan III',
	'Jud': 'Epístola de Judas',
	'Ap': 'Apocalipsis de Juan',
	'Bel': 'Historia de Bel y el Dragón',
	'Man': 'Oración de Manasés',
	'Tb': 'Tobit',
	'1 Hen': 'Enoc',
	'AsMo': 'Asunción de Moisés'
};

exports.BibleAbbEn = {
	'Gn': 'Genesis',
	'Ex': 'Exodus',
	'Lv': 'Leviticus',
	'Nm': 'Numbers',
	'Dt': 'Deuteronomy',
	'Jos':'Joshua',
	'Jue': 'Judges',
	'Rt': 'Ruth',
	'1 S': '1 Samuel',
	'2 S': '2 Samuel',
	'1 R': '1 Kings',
	'2 R': '2 Kings',
	'1 Cr': '1 Chronicles',
	'2 Cr': '2 Chronicles',
	'Esd': 'Ezra',
	'Neh': 'Nehemiah',
	'Est': 'Esther',
	'1 Mac': '1 Maccabees',
	'2 Mac': '2 Maccabees',
	'Job': 'Job',
	'Sal': 'Psalms',
	'Pr': 'Proverbs',
	'Ec': 'Ecclesiastes',
	'Cnt': 'Song of Solomon',
	'Eclo': 'Sirach (Ecclesiasticus)',
	'Sab': 'Wisdom of Solomon',
	'Is': 'Isaiah',
	'Jer': 'Jeremiah',
	'Lm': 'Lamentations',
	'Bar': 'Baruch',
	'Ez': 'Ezekiel',
	'Dn': 'Daniel',
	'Os': 'Hosea',
	'Jl': 'Joel',
	'Am': 'Amos',
	'Abd': 'Obadiah',
	'Jon': 'Jonah',
	'Miq': 'Micah',
	'Nah': 'Nahum',
	'Hab': 'Habakkuk',
	'Sof': 'Zephaniah',
	'Hag': 'Haggai',
	'Zac': 'Zechariah',
	'Mal': 'Malachi',
	'Mt': 'Gospel of Matthew',
	'Mc': 'Gospel of Mark',
	'Lc': 'Gospel of Luke',
	'Jn': 'Gospel of John',
	'Hch': 'Acts of the Apostles',
	'Ro': 'Epistle to the Romans',
	'1 Co': 'Epistle to the Corinthians I',
	'2 Co': 'Epistle to the Corinthians II',
	'Gl': 'Epistle to the Galatians',
	'Ef': 'Epistle to the Ephesians',
	'Flp': 'Epistle to the Philippians',
	'Col': 'Epistle to the Colossians',
	'1 Ts': 'Epistle to the Thessalonians I',
	'2 Ts': 'Epistle to the Thessalonians II',
	'1 Ti': 'Epistle to Timothy I',
	'2 Ti': 'Epistle to Timothy II',
	'Tit': 'Epistle to Titus',
	'Flm': 'Epistle to Philemon',
	'Heb': 'Epistle to the Hebrews',
	'Stg': 'Epístola of James',
	'1 P': 'Epístola of Peter I',
	'2 P': 'Epístola of Peter II',
	'1 Jn': 'Epístola of John I',
	'2 Jn': 'Epístola of John II',
	'3 Jn': 'Epístola of John III',
	'Jud': 'Epístola of Jude',
	'Ap': 'Revelation of John',
	'Bel': 'Bel and the Dragon',
	'Man': 'Prayer of Manesseh',
	'Tb': 'Tobit',
	'1 Hen': 'Enoch',
	'AsMo': 'Moses Asumption'
};