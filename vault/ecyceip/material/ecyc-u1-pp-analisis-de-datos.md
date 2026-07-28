## ANALISIS DE DATOS

Análisis cuantitativo

## El uso de la Estadística

La Estadística incluye una serie de herramientas por medio de los cuales podemos recolectar, organizar, resumir, presentar y analizar datos numéricos que nos permiten extraer conclusiones válidas.

Es ampliamente utilizada en variadas disciplinas y con diversos fines.

Estadística descriptiva: permite presentar y caracterizar un conjunto de datos con el fin de describir apropiadamente las diversas características de ese conjunto.

Estadística inferencial: permite obtener conclusiones o generalizaciones que sobrepasan los límites de los conocimientos aportados por un conjunto de datos. Busca obtener información sobre la población basándose en el estudio de los datos de una muestra tomada a partir de ella

## Tipos de variables

Las variables pueden ser

Variables cualitativas o categóricas: no se pueden medir numéricamente (por ejemplo: nacionalidad, ocupación, sexo).

Variables cuantitativas: tienen valor numérico (edad, precio de un producto, ingresos anuales).

Las variables cuantitativas pueden ser

- Discretas: no hay valores entre dos consecutivos (1, 2, 8, -4, etc.). Por ejemplo: número de hermanos, cantidad de empleados, etc.

- Continuas: entre un valor pueden tomar infinitos valores. Por ejemplo, la velocidad de un vehículo puede ser 90.4 km/h, 94.57 km/h...etc.

## Niveles de Medición

La medición de las variables puede realizarse por medio de cuatro escalas de medición:

## nominal:

establece categorías distintivas que no implican un orden específico. Se pueden asignar números para identificarlos. Posibilita el conteo y la clasificación

Es la escala de medición que asigna un número, un nombre, un símbolo o una categoría a un fenómeno sin que exista relación de orden, grado, jerarquía o proporción entre los diversos elementos de la escala. Dicotómicas (binarias) o politómicas

## ordinal:

permite ordenar a los eventos en función de la mayor o menor posesión de un atributo o característica. Estas escalas admiten la asignación de números en función de un orden prescrito.

## Niveles de Medición

de intervalo:

posee las características de la medición nominal y ordinal. Además, establece la distancia entre una medida y otra. La escala de intervalo carece de un cero absoluto.

de razón:

incluye las características de los tres anteriores niveles de medición (nominal, ordinal e intervalo). Determina la distancia exacta entre los intervalos de una categoría. Adicionalmente tiene un cero absoluto

## La matriz de datos

La matriz de datos es una forma de ordenar los datos de manera que sea visible su estructura tripartita: casos, variables y valores.

Cada fila de la matriz corresponde a una unidad de análisis (identificada por un código de 01 a n), cada una de las dos columnas a una variable, y en las celdas figuran los valores

## Ejemplo de matriz de datos

<div align="center">

MODELO DE MATRIZ DE DATOS

</div>

<table border="1"><tr><td rowspan="2">UNIDAD DE ANÁLISIS</td><td colspan="6">VARIABLES</td></tr><tr><td>V1</td><td>V2</td><td>V3</td><td>V4</td><td>V5</td><td>V6</td><td>VN</td></tr><tr><td>UA1</td><td>1</td><td>20</td><td>1</td><td>2</td><td>4</td><td>3</td><td></td></tr><tr><td>UA2</td><td>1</td><td>28</td><td>1</td><td>1</td><td>5</td><td>1</td><td></td></tr><tr><td>UA3</td><td>2</td><td>46</td><td>2</td><td>1</td><td>6</td><td>6</td><td></td></tr><tr><td>UA4</td><td>1</td><td>34</td><td>3</td><td>4</td><td>7</td><td>1</td><td></td></tr><tr><td>UA5</td><td>2</td><td>29</td><td>2</td><td>2</td><td>9</td><td>1</td><td></td></tr><tr><td>UA6</td><td>2</td><td>19</td><td>1</td><td>3</td><td>4</td><td>3</td><td></td></tr><tr><td>UA7</td><td>2</td><td>54</td><td>2</td><td>2</td><td>4</td><td>5</td><td></td></tr><tr><td>UA8</td><td>1</td><td>67</td><td>4</td><td>5</td><td>2</td><td>4</td><td></td></tr><tr><td>UA9</td><td>1</td><td>32</td><td>2</td><td>1</td><td>9</td><td>1</td><td></td></tr><tr><td>UA10</td><td>2</td><td>23</td><td>3</td><td>4</td><td>5</td><td>6</td><td></td></tr><tr><td>UA11</td><td>1</td><td>19</td><td>1</td><td>3</td><td>2</td><td>2</td><td></td></tr><tr><td>UA12</td><td>2</td><td>18</td><td>1</td><td>3</td><td>5</td><td>3</td><td></td></tr><tr><td>UA13</td><td>1</td><td>36</td><td>3</td><td>1</td><td>8</td><td>1</td><td></td></tr><tr><td>UA14</td><td>2</td><td>63</td><td>4</td><td>1</td><td>3</td><td>5</td><td></td></tr><tr><td>UAN</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>

La generación de una matriz de datos supone la codificación previa de las observaciones, la introducción (grabación) de los datos en archivos informáticos, la depuración de los datos ya grabados (detección y tratamiento de los errores de grabación y valores faltantes), y eventualmente la realización de transformaciones y tratamiento de ficheros que faciliten su posterior tratamiento estadístico.

## Pasos en la codificación

- Codificar los valores de las variables categoricas con números.

- A esos números hay que asignarles etiquetas.

Esa variable aunque tenga números no será cuantitativa, seguirá siendo cualitativa (categorica)

Se deben asignar códigos a respuestas especiales (por ej. no sabe o no contesta) así como para identificar a los datos perdidos.

Considerar criterios de exhaustividad y mutua exclusión

## Ejemplos de codificación

Ej. Practica deporte: Si:1 No: 2

Nivel socioeconómico: Bajo: 1 Medio: 2 Alto:3

## ¿Por qué asignar números?

Porque es más fácil equivocarse al introducir texto que un número. Por ej. para el programa de análisis de datos,

VARON varón Varón varon Varon VARÓN

Porque es más rápido escribir "1" que varón

## INGRESO DE DATOS

- De manera directa

- Copiando

- Importando

Los formatos son compatibles con la mayoría de las bases de datos

## Exploración de la matriz de datos

- Integridad de la matriz

- Detección y corrección de errores

- Imputación de datos

## Análisis descriptivos

Objetivo:

Resumir los datos y representarlos de una manera informativa e inteligible.

Incluye:

Distribuciones de frecuencias, porcentajes, proporciones

Tendencia central y variabilidad

Posición no central

- Evaluación de distribuciones: Indices de forma (simetría curtosis)

Representación gráfica y Análisis visual de datos.

## ESTADISTICA DESCRIPTIVA

DISTRIBUCIONES DE FRECUENCIAS

DISTRIBUCIONES DE PROPORCIONES

DISTRIBUCIONES DE PORCENTAJES

<table class="table table-bordered"><thead><tr><th rowspan="2">UNIDAD DE ANÁLISIS</th><th colspan="7">VARIABLES</th></tr><tr><th>V 1</th><th>V 2</th><th>V 3</th><th>V 4</th><th>V 5</th><th>V 6</th><th>VN</th></tr></thead><tbody><tr><td>UA1</td><td>1</td><td>20</td><td>1</td><td>2</td><td>4</td><td>3</td><td></td></tr><tr><td>UA2</td><td>1</td><td>28</td><td>1</td><td>1</td><td>5</td><td>1</td><td></td></tr><tr><td>UA3</td><td>2</td><td>46</td><td>2</td><td>1</td><td>6</td><td>6</td><td></td></tr><tr><td>UA4</td><td>1</td><td>34</td><td>3</td><td>4</td><td>7</td><td>1</td><td></td></tr><tr><td>UA5</td><td>2</td><td>29</td><td>2</td><td>2</td><td>9</td><td>1</td><td></td></tr><tr><td>UA6</td><td>2</td><td>19</td><td>1</td><td>3</td><td>4</td><td>3</td><td></td></tr><tr><td>UA7</td><td>2</td><td>54</td><td>2</td><td>2</td><td>4</td><td>5</td><td></td></tr><tr><td>UA8</td><td>1</td><td>67</td><td>4</td><td>5</td><td>2</td><td>4</td><td></td></tr><tr><td>UA9</td><td>1</td><td>32</td><td>2</td><td>1</td><td>9</td><td>1</td><td></td></tr><tr><td>UA10</td><td>2</td><td>23</td><td>3</td><td>4</td><td>5</td><td>6</td><td></td></tr><tr><td>UA11</td><td>1</td><td>19</td><td>1</td><td>3</td><td>2</td><td>2</td><td></td></tr><tr><td>UA12</td><td>2</td><td>18</td><td>1</td><td>3</td><td>5</td><td>3</td><td></td></tr><tr><td>UA13</td><td>1</td><td>36</td><td>3</td><td>1</td><td>8</td><td>1</td><td></td></tr><tr><td>UA14</td><td>2</td><td>63</td><td>4</td><td>1</td><td>3</td><td>5</td><td></td></tr><tr><td>UAN</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>

V3

<table border="1"><tr><td>x</td><td>f</td></tr><tr><td>1</td><td>5</td></tr><tr><td>2</td><td>4</td></tr><tr><td>3</td><td>3</td></tr><tr><td>4</td><td>2</td></tr><tr><td>Total</td><td>14</td></tr></table>

## ¿Qué es una Proporción?

Una parte

todo

mujeres

hombres + mujeres

hombres

hombres + mujeres

¿Para qué?: PARA PODER COMPARAR con la misma base distribuciones de diferente "n" (número de casos) "

<table border="1"><tr><td>x</td><td>f</td><td>p</td></tr><tr><td>1</td><td>5</td><td>.36</td></tr><tr><td>2</td><td>4</td><td>.29</td></tr><tr><td>3</td><td>3</td><td>.21</td></tr><tr><td>4</td><td>2</td><td>.14</td></tr><tr><td>Total</td><td>14</td><td>1</td></tr></table>

¿y el porcentaje?

Una parte

.100

todo

f

----.100

n

mujeres

___.100

hombres +

mujeres

<table border="1"><tr><td>x</td><td>f</td><td>p</td><td>%</td></tr><tr><td>1</td><td>5</td><td>.36</td><td>35.7</td></tr><tr><td>2</td><td>4</td><td>.29</td><td>28.6</td></tr><tr><td>3</td><td>3</td><td>.21</td><td>21.4</td></tr><tr><td>4</td><td>2</td><td>.14</td><td>14.3</td></tr><tr><td>Total</td><td>14</td><td>1</td><td>100.0</td></tr></table>

## Estadística descriptiva

Medidas de tendencia central

MODO - NOMINAL

MEDIANA - ORDINAL

MEDIA - INTERVALAR RAZON

## Elección de las medidas a aplicar

Además del nivel de medición se debe considerar las características de la distribución.

La media es sensible a valores extremos

La mediana no es sensible a valores extremos.

Modo: el valor de variable que mas se repite

Mediana: el valor de variable que divide a la distribución en dos partes iguales dejando la mitad por debajo y la mitad por encima.

Se averigua la posición de la mediana para saber dónde se encuentra: n+1

Media aritmética

$$
\overline {{X}} = \frac {\sum x}{n}
$$

## Veamos un ejemplo...

<table border="1"><tr><td>X</td><td>F</td><td>Fa</td></tr><tr><td>1</td><td>5</td><td>5</td></tr><tr><td>2</td><td>4</td><td>9</td></tr><tr><td>3</td><td>3</td><td>12</td></tr><tr><td>4</td><td>2</td><td>14</td></tr><tr><td>Total</td><td>14</td><td></td></tr></table>

Modo: 1

Mediana: $ \frac{n+1}{2}=\frac{15}{2}=7. 5 $ (posición) Mediana: 2

$$
\bar {X} = \frac {\sum x}{n}
$$

$$
\mathrm {M e d i a :} \frac {1 + 1 + 1 + 1 + 1 + 2 + 2 + 2 + 2 + 3 + 3 + 4 + 4 = 3 0 = 2 , 1}{1 4}
$$

## Otros ejemplos

<table border="1"><tr><td>X</td><td>F</td></tr><tr><td>natación</td><td>10</td></tr><tr><td>Futbol</td><td>40</td></tr><tr><td>Basket</td><td>20</td></tr><tr><td>Rugby</td><td>8</td></tr><tr><td>otros</td><td>6</td></tr><tr><td>Total</td><td>84</td></tr></table>

Modo: futbol Mediana: no se puede calcular Media: No se puede calcular

## Otros ejemplos

<table border="1"><tr><td>X</td><td>F</td><td>Fa</td></tr><tr><td>Muy en desacuerdo</td><td>8</td><td>8</td></tr><tr><td>En desacuerdo</td><td>12</td><td>20</td></tr><tr><td>Ni de acuerdo, ni en desacuerdo</td><td>10</td><td>30</td></tr><tr><td>De acuerdo</td><td>40</td><td>70</td></tr><tr><td>Muy de acuerdo</td><td>20</td><td>90</td></tr><tr><td>Total</td><td>90</td><td></td></tr></table>

Modo: De acuerdo

Mediana: De acuerdo

Media: No se puede calcular

## Estadística descriptiva

Medidas de Variabilidad

RANGO

ANTIMODO

DESV. SEMIINTERCUARTIL

VARIANZA

DESVIO STANDARD

Rango: la diferencia entre el valor observado más alto y el más bajo

Antimodo: porcentaje por fuera del modo

Desviación semi-intercuartil: la mitad de la diferencia entre el cuartil 3 y 1

Varianza

$$
S ^ {2} = \frac {\sum_ {i} \left(X i - \bar {X}\right) ^ {2}}{n}
$$

Desvío estandar =

Raiz cuadrada

$$
S \sqrt {\frac {\sum_ {i} \left(X i - \bar {X}\right) ^ {2}}{n}}
$$

## Calculo de rango y antimodo

<table border="1"><tr><td>X</td><td>F</td><td>Fa</td></tr><tr><td>1</td><td>5</td><td>5</td></tr><tr><td>2</td><td>4</td><td>9</td></tr><tr><td>3</td><td>3</td><td>12</td></tr><tr><td>4</td><td>2</td><td>14</td></tr><tr><td>Total</td><td>14</td><td></td></tr></table>

Rango: 4-1=3

Antimodo: $ \left(1-\frac{fmo}{n}\right).100 $

$$
\left(1 - \frac {5}{1 4}\right). 1 0 0 = 6 4. 2
$$

## Cálculo de Varianza y Desvío

Valores: 2-4-4-5-6-7-7-8-8-9

Media: 60:6 10

Varianza:

$$
\begin{array}{l} S ^ {2} = \frac {\sum_ {i} \left(X i - \bar {X}\right) ^ {2}}{n} \\ \mathrm {D e s v i o} \quad S \sqrt {\frac {\sum_ {i} \left(X i - \bar {X}\right) ^ {2}}{n}} \\ \end{array}
$$

$$
\begin{array}{l} (2 - 6) ^ {2} + (4 - 6) ^ {2} + (4 - 6) ^ {2} + (5 - 6) ^ {2} + (6 - 6) ^ {2} + (7 - 6) ^ {2} + (7 - 6) ^ {2} + (8 - 6) ^ {2} + (8 - 6) ^ {2} + (9 - 6) ^ {2} \\ 1 6 + 4 + 4 + 1 + 0 + 1 + 1 + 4 + 4 + 9; 4 4: 4, 4 \mathrm {D e s v i o :} 2, 1 \\ 1 0 1 0 \\ \end{array}
$$

<table border="1"><tr><td>NIVEL</td><td>TENDENCIA CENTRAL</td><td>VARIABILIDAD</td></tr><tr><td>NOMINAL</td><td>Modo</td><td>Antimodo</td></tr><tr><td>ORDINAL</td><td>Modo Mediana</td><td>Antimodo Desviación semi-intercuartíl</td></tr><tr><td>INTERVALAR o RAZON</td><td>Mo Mediana Media aritmética</td><td>Antimodo Desviación semi-intercuartíl Varianza Desvío estandar Rango</td></tr></table>
