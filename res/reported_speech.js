json_data = {
	"data":[
		{
			"frase_ingles":"Is Lisa at work? She asked me if Lisa was at work.",
			"trechos_escondidos":[
				{
					// trecho é o trecho que vai ser escondido e posição vai ser usada caso esse mesmo trecho se repita.
					// então a posição vai selecionar qual é o trecho que tem que esconder.
					"trecho":"Lisa was at work.",
					"posicao":"1"
				},
			]
		},
		{
			"frase_ingles":"Is she late?He asked me if she was late.",
			"trechos_escondidos":[
				{
					"trecho":"she was late.",
					"posicao":"1"
				},
			]
		},
		{
			"frase_ingles":"Is the school near here? She asked me if the school was near here.",
			"trechos_escondidos":[
				{
					"trecho":"the school was near here.",
					"posicao":"1"
				},
			]
		}
	]
}