Tenemos el fichero input.txt con un texto que hemos recibido en inglés, y del cual queremos extraer un informe sobre algunas de las palabras utilizadas en el mismo. Por otro lado tenemos otro fichero wordlist.txt que contiene una lista de las palabras también en inglés que queremos buscar sobre el texto contenido en el fichero de entrada input.txt. Queremos generar un informe con el número de ocurrencias de las palabras de la lista que están contenidas en el texto de entrada (sin tener en cuenta si están en mayúsculas o minúsculas) e indicar si dicha palabra es una anagrama de alguna de las palabras de la lista.
Un anagrama es una palabra que se contruye con la reordenación de las letras de otra palabra. Ejemplo: snow - owns
La salida se llamará output.csv y tendrá una columna con la palabra del texto de entrada encontrada dentro de la lista, una segunda columna con el número de ocurrencias y en la tercera columna indicamos "si/no" es anagrama, y el anagrama encontrado en la lista (sin tener en cuenta si están en mayúsculas o minúsculas) entre paréntesis (si existen varios anagramas es suficiente con indicar uno de ellos)
Ejemplo:
* snow  3  si(owns).

El mismo método para encontrar anagramas se utilizará en un futuro para aplicarlo sobre tablas de una base de datos. Cuanto más reutilizable sea, mejor.

Bonus:
* Pruebas unitarias.

Notas:
* Es muy importante la calidad del código.
* No utilizar ninguna dependencia.
* Escribir un readme.md con las instrucciones de ejecución
