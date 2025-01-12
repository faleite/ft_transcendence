class Pessoa:
	# pass
	
	# Quando uma variavel tiver o mesmo valor (default) para todos os objetos crie um atribulto de classe
	olhos = 2 # atribukto de classe

	# atribulto de estancia
	def __init__(self, *filhos, nome=None, idade=35): # Para criacao de atributo de Dados (variaveis)
		self.nome = nome
		self.idade = idade
		self.filhos = list(filhos)
		
	def cumprimentar(self): # atribulto de metodo da estancia
		return f'Ola {id(self)}'
	
	# Um método estático é apenas uma função atrelada a classe, ela não depende do objeto em si
	@staticmethod
	def metodo_estatico(): # não precisa receber nenhum atribulto
		return 42
	
	# Metodos da própria classe
	@classmethod
	def nome_e_atribultos_classe(cls):
		return f'{cls} - olhos {cls.olhos}'


# Heranca (Homem e um tipo de pessoa, logo a classe 'Homem()' herda da classe pai 'Pessoa()')
class Homem(Pessoa): # herda todos os metodos e atribultos da classe pai 'Pessoa()'
	pass


"""================================TESTES============================================"""

if __name__ == '__main__':
	# bento = Pessoa(nome='Bento')
	bento = Homem(nome='Bento')
	# fabricio = Pessoa(bento, nome='Fabricio')
	fabricio = Homem(bento, nome='Fabricio')

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

	# Atribulto de classe
	print(Pessoa.olhos) # atribulto de estancia
	print(fabricio.olhos) 
	print(bento.olhos) 
	# print(Pessoa.nome) # nao é uma atribulto de classe
	print(id(Pessoa.olhos), id(fabricio.olhos), id(bento.olhos))

	bento.olhos = 3
	print(bento.olhos)
	print(id(Pessoa.olhos), id(fabricio.olhos), id(bento.olhos))
	print(bento.__dict__)

	# O método estatico pode ser chamado pela própria classe ou pelo objeto
	print(Pessoa.metodo_estatico(), bento.metodo_estatico())

	# Método da classe
	print(Pessoa.nome_e_atribultos_classe(), bento.nome_e_atribultos_classe())

	# Sobre Heranca
	pessoa = Pessoa('Anonimo')
	# Funcao que verifica a instancia de um objeto
	print(isinstance(pessoa, Pessoa)) # True
	print(isinstance(pessoa, Homem)) # False
	print(isinstance(bento, Pessoa)) # True
	print(isinstance(bento, Homem)) # True	
