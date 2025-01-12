"""Test com Unittest
Para criar o teste, criamos um arquivo com as iniciais 'test'
"""

from unittest import TestCase
from oo.carro import Motor # Classe a ser testada

class CarroTestCase(TestCase): # Deve herdar 'TestCase()'
	def test_velocidade_inicial(self): # metodo deve iniciar nome com 'test'
		motor = Motor() # Deve importar classe a ser testada
		self.assertEqual(0, motor.velocidade) # primeiro arg e o valor esperedado

	def test_acelerar(self):
		motor = Motor()
		motor.acelerar()
		self.assertEqual(1, motor.velocidade)

""" Como rodar o teste
	>>> python3 -m unittest discover <diretorio_do_teste> 
"""