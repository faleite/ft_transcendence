class Pessoa:
	# pass
	def __init__(self, *filhos, nome=None, idade=35): # Para criacao de atributo de Dados (variaveis)
		self.nome = nome
		self.idade = idade
		self.filhos = list(filhos)
		
	def cumprimentar(self): # atribulto de metodo
		return 'Ola'

if __name__ == '__main__':
	bento = Pessoa(nome='Bento')
	fabricio = Pessoa(bento, nome='Fabricio')
	print(Pessoa.cumprimentar(fabricio))
	print(id(fabricio))
	print(fabricio.cumprimentar())
	# fabricio.nome = 'faleite'
	print(fabricio.nome)
	print(fabricio.idade)
	# print(fabricio.filhos[0].nome)
	# print(fabricio.filhos[0].idade)
	for filho in fabricio.filhos:
		print(filho.nome)
	
	# E possivel atribuir um atribulto dinamicamento em um objeto
	# este novo atribulto sera atribuido apenas ao o objeto estanciando em questao:
	fabricio.sobrenome = "Leite"
	print(fabricio.sobrenome)
	# bento.sobrenome # ERROR


	# Verificar todos os atribultos da estancia de um objeto com __dict__
	print(fabricio.__dict__)
	print(bento.__dict__)

	# Tambem e possivel remover um tributo de um objeto:
	del fabricio.filhos
	print(fabricio.__dict__)
