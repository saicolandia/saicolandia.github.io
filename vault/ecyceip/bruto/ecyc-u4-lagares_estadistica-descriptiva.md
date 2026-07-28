# Estadística descriptiva

La estadística recoge, ordena y analiza datos para estudiar las características o el comportamiento de un colectivo. Muchos fenómenos de la naturaleza no son deterministas (es decir no dan lugar a un resultado cierto o seguro). Por ejemplo, la duración de la vida de un organismo, la herencia de los genes, el número de personas infectadas durante un brote epidérmico o el color preferido de los alumnos de una clase.

La Estadística es la rama de las matemáticas que se ocupa de los métodos y procedimientos para recoger, clasificar, representar y resumir datos (Estadística descriptiva), así como de obtener consecuencias científicas a partir de estos datos (Inferencia Estadística).

Para comprender mejor la diferencia de estos dos grandes apartados de la Estadística, consideramos un ejemplo de un internista que desea comprobar la eficacia de una droga hipotensora. Para ello sólo dispondrá de un número limitado de pacientes a los que administrar la droga, y, sin embargo, deseará obtener conclusiones válidas para todos los pacientes hipertensos del mismo medio. Del estudio que se realiza en el número limitado de pacientes (muestra) se encarga la Estadística Descriptiva que presentamos en los Temas 1 y 2. Obtener conclusiones para todos los pacientes (población) a partir de un número limitado de ellos se realiza mediante la Inferencia Estadística, que será considerada en los el Temas 3, 4, 5 y 6.

El objetivo de este Tema es presentar herramientas básicas de la Estadística Descriptiva.

## 1.1 Conceptos fundamentales

<table border="1"><tr><td colspan="2">Individuo o elemento: cada una de las personas u objetos que se desea estudiar.</td></tr><tr><td>Población: conjunto de individuos o elementos observados al realizar un experimento que cumplen ciertas propiedades comunes.</td><td>Por ejemplo, animales, árboles, chinchetas, altura de una planta, tiempo de vida, etc. En el ejemplo anterior, son todos los pacientes hipertensos del mismo medio.</td></tr><tr><td>Muestra: una parte de la población.</td><td>En el ejemplo anterior, es el conjunto de pacientes hipertensos a los que se les aplica la droga. Generalmente es difícil obtener medidas de toda la población (medir la estatura de todos los españoles) o imposible (estudiando el caudal de un río tendríamos que medir los caudales de todos los años pasados y futuros). Se mide una parte de la población (una muestra) y se trata de inferir estos resultados sobre toda la población ahorrando tiempo y dinero.</td></tr></table>

Variable estadística es una propiedad característica de la población que estamos interesados en estudiar.

Hay dos tipos de variables cualitativas y cuantitativas.

Variable cualitativa: mide características que no toman valores numéricos. Por ejemplo, la profesión del padre, color del pelo, nombre de una persona, asignatura preferida, etc. Se agrupan por modalidades, por ejemplo, la variable sexo presenta dos modalidades: femenino y masculino.

Variable cuantitativa: se puede medir y expresar mediante cantidades numéricas. A su vez se clasifican en:

Cuantitativa discreta: sólo admite valores aislados. Se habla de elementos o datos. Por ejemplo, el número de hijas de una familia, el número de obreros en una fábrica, talla del pantalón, etc.

Cuantitativa continua: puede admitir cualquier valor dentro de un intervalo. Se clasifican en intervalos o clases. Por ejemplo el peso (2.3 kg, 2.4 kg, 2.5 kg,...), la altura de un objeto (1.64 m, 1.65 m, 1.66 m,...), temperaturas registradas en un observatorio o la presión sanguínea de enfermos, es decir permiten que siempre exista un valor entre dos variables.

## 1.2 Tablas estadísticas

Una vez obtenidos los datos de la muestra o población, estos se suelen ordenar y clasificar en la llamadas tablas estadísticas. Vamos a ilustrar con el siguiente ejemplo la necesidad de crear este tipo de tablas.

## Ejemplo 1.1 Una tabla no estadística

Supongamos que tenemos una muestra de 500 alumnos varones de una Universidad, en los que se desea estudiar el grupo sanguíneo (variable cualitativa), el número de hermanos excluido él mismo (variable cuantitativa discreta) y el peso (variable cuantitativa continua). Los datos de la muestra están recogidos en la Tabla 1.1. Es evidente que, a partir de la Tabla 5.1 no se puede deducir fácilmente la información global sobre el colectivo estudiado: ¿cuál es el grupo sanguíneo más frecuente?, ¿cómo de frecuente es?, etc.

Tabla 1.1

Grupo sanguíneo, número de hermanos y peso de 500 alumnos varones de una Universidad

(Ejemplo de tabla no estadística)


<table border="1"><tr><td>Alumno n°</td><td>Grupo sanguíneo</td><td>Número de hermanos</td><td>Peso(Kg.)</td></tr><tr><td>1</td><td>A</td><td>0</td><td>70.502</td></tr><tr><td>2</td><td>B</td><td>3</td><td>67.231</td></tr><tr><td>...</td><td>...</td><td>...</td><td>...</td></tr><tr><td>500</td><td>AB</td><td>2</td><td>71.676</td></tr></table>

La manera de construir la tablas estadísticas varía según sea el carácter de la variable a estudiar: cualitativa, cuantitativa discreta o cuantitativa continua. A continuación veamos ejemplos de cada caso.

## 1.2.1 Variable cualitativa

## Ejemplo 1.2 Tabla para analizar una variable cualitativa

Usando los datos del Ejemplo 1.1 y de la Tabla 1.1 podemos construir una tabla estadística, conocida como tabla de frecuencias (se define más adelante con carácter general). La Tabla 1.2 muestra la distribución de frecuencias del grupo sanguíneo (variable cualitativa).

Se observa que las frecuencias relativas se introducen para hacer comparables dos o más tablas de datos del mismo tipo basados en tamaños de muestra diferentes. Por ejemplo, si en otra Universidad se encuentra la frecuencia absoluta $ n_{3}^{\prime}=4 0 $ de entre el número total de estudiantes $ N^{\prime}=9 3 7 $ , no es posible determinar a partir de $ n_{3}=2 5 $ y $ n_{3}^{\prime}=4 0 $ en cuál de los dos muestras es más frecuente el grupo sanguíneo AB, pues las frecuencias absolutas están basadas en diferentes valores de $ N $ . Sin embargo, las frecuencias relativas $ \left(f_{3}=0.05\right. $ y $ f_{3}^{\prime}=4 0 / 9 3 7=0. 0 4 3 $ ) sí permiten efectuar tal comparación y concluir que el grupo sanguíneo AB es un poco más frecuente en el primer caso.

Tabla 1.2

Distribución del grupo sanguíneo en 500 alumnos varones de una Universidad (variable cualitativa)

| Grupo sanguíneo | Frecuencia absoluta($n_i$) | Frecuencia relativa($f_i=\frac{n_i}{N}$) | Porcentaje($P_i=100f_i$) |
| --------------- | -------------------------- | ---------------------------------------- | ------------------------ |
| A               | 150                        | $\frac{150}{500}=0.30$                   | 30%                      |
| B               | 75                         | $\frac{75}{500}=0.15$                    | 15%                      |
| AB              | 25                         | $\frac{25}{500}=0.05$                    | 5%                       |
| 0               | 250                        | $\frac{250}{500}=0.50$                   | 50%                      |
| Total           | 500                        | 1                                        | 100%                     |


Con carácter general una tabla para analizar una variable cualitativa es la que muestra la Tabla 1.3.

Tabla 1.3

Distribución de frecuencias: variable cualitativa

| Clase    | Fr. absoluta($n_i$) | Fr. relativa($f_i$) | %        | Fr. abs. acumulada($N_i$) | Fr. relativa acumulada($F_i$) |
| -------- | ------------------- | ------------------- | -------- | ------------------------- | ----------------------------- |
| $C_1$    | $n_1$               | $f_1$               | 100$f_1$ | $N_1$                     | $F_1$                         |
| $C_2$    | $n_2$               | $f_2$               | 100$f_2$ | $N_2$                     | $F_2$                         |
| $\vdots$ | $\vdots$            | $\vdots$            | $\vdots$ | $\vdots$                  | $\vdots$                      |
| $C_K$    | $n_K$               | $f_K$               | 100$f_K$ | $N_K=N$                   | $F_K=1$                       |
| Total    | N                   | 1                   | 100%     | ...                       | ...                           |

En la a la Tabla 1.3 se han añadido las distribuciones de frecuencias absolutas acumuladas, $ N_{i} $ , y frecuencias relativas acumuladas, $ F_{i} $ (véase el Ejemplo 1.3). La información que proporcionan la distribución de frecuencias

relativas puede obtenerse a partir de la distribución de frecuencias relativas acumuladas y recíprocamente. Debemos observar que las frecuencias acumuladas sólo tienen sentido cuando es posible establecer una relación de orden entre los valores de la variable.

## Ejemplo 1.3

Dentro de los procesos industriales de gran importancia para el Ingeniero Químico, están los procesos de tratamiento de aguas. Un laboratorio determinó la dureza del agua de 10 muestras obteniendo los resultados:

<table border="1"><tr><td>Muestra</td><td>Dureza</td></tr><tr><td>1</td><td>Agua blanda</td></tr><tr><td>2</td><td>Agua blanda</td></tr><tr><td>3</td><td>Agua dura</td></tr><tr><td>4</td><td>Agua muy dura</td></tr><tr><td>5</td><td>Agua muy dura</td></tr><tr><td>6</td><td>Agua extremadamente dura</td></tr><tr><td>7</td><td>Agua blanda</td></tr><tr><td>8</td><td>Agua blanda</td></tr><tr><td>9</td><td>Agua dura</td></tr><tr><td>10</td><td>Agua muy dura</td></tr></table>

La tabla de distribución de frecuencias para la variable C =《Dureza del agua》 se muestra en la siguiente tabla:

<table border="1"><tr><td>Dureza del agua(Ci)</td><td>ni</td><td>fi</td><td>Ni</td><td>Fi</td></tr><tr><td>Agua blanda</td><td>4</td><td>0.4</td><td>4</td><td>0.4</td></tr><tr><td>Agua dura</td><td>2</td><td>0.2</td><td>6</td><td>0.6</td></tr><tr><td>Agua muy dura</td><td>3</td><td>0.3</td><td>9</td><td>0.9</td></tr><tr><td>Agua extremadamente dura</td><td>1</td><td>0.1</td><td>10</td><td>1</td></tr><tr><td>Total</td><td>10</td><td>1</td><td>- - -</td><td>- - -</td></tr></table>

## 1.2.2 Variable cuantitativa discreta

Criterios similares sirven para el caso cuantitativo discreto como muestra el ejemplo siguiente.

## Ejemplo 1.4 Tabla para analizar una variable cuantitativa discreta

En la Tabla 1.4 se representan distribuciones de frecuencias para analizar el número de hermanos (variable cuantitativa discreta). Se observa que las clases son ahora valores numéricos, pues los datos lo son.

Las clases se han ordenado de menor a mayor para mayor claridad de la tabla.

Por otra parte, en la Tabla 1.4 se observa que las últimas variables tienen frecuencias muy bajas, lo que se suele hacen en estos casos es agrupar en la última clase las clases originales 7,8,... (por tener frecuencias muy bajas) para no hacer la tabla muy extensa sin necesidad. El resultado puede observarse en la Tabla 1.5.

Tabla 1.4

Distribución de frecuencias del número de hermanos (excluido el mismo) de una muestra de 500 alumnos varones de una Universidad (variable cuantitativa discreta)



Aquí tienes la tabla convertida a formato Markdown:

| n° hermanos | Fr. absoluta(ni) | Fr. relativa(fi=ni/N)  | % (Pi=100fi) | Fr. absoluta acumulada(Ni) |
| ----------- | ---------------- | ---------------------- | ------------ | -------------------------- |
| 0           | 72               | $\frac{72}{500}=0.144$ | 14.4%        | 72                         |
| 1           | 155              | $\frac{155}{500}=0.31$ | 31%          | 227                        |
| 2           | 97               | $\frac{97}{500}=0.194$ | 19.4%        | 324                        |
| 3           | 81               | $\frac{81}{500}=0.162$ | 16.2%        | 405                        |
| 4           | 30               | $\frac{30}{500}=0.06$  | 6%           | 435                        |
| 5           | 27               | $\frac{27}{500}=0.054$ | 5.4%         | 462                        |
| 6           | 20               | $\frac{20}{500}=0.04$  | 4%           | 482                        |
| 7           | 10               | $\frac{10}{500}=0.02$  | 2%           | 492                        |
| 8           | 4                | $\frac{4}{500}=0.008$  | 0.8%         | 496                        |
| 9           | 2                | $\frac{2}{500}=0.004$  | 0.4%         | 498                        |
| 10          | 1                | $\frac{1}{500}=0.002$  | 0.2%         | 499                        |
| 11          | 1                | $\frac{1}{500}=0.002$  | 0.2%         | 500                        |
| Total       | 500              | 1                      | 100%         | - -                        |

Tabla 1.5

Distribución de frecuencias del número de hermanos (excluido el mismo) de una muestra de 500 alumnos varones de una Universidad (variable cuantitativa discreta) con las últimas frecuencias agrupadas, por tener valores muy bajos

| n° hermanos | Fr. absoluta($n_i$) | Fr. relativa($f_i=\frac{n_i}{N}$) | Porcentaje(%) | Fr. absoluta acumulada($N_i$) |
| ----------- | ------------------- | --------------------------------- | ------------- | ----------------------------- |
| 0           | 72                  | $\frac{72}{500}=0.144$            | 14.4%         | 72                            |
| 1           | 155                 | $\frac{155}{500}=0.31$            | 31%           | 227                           |
| 2           | 97                  | $\frac{97}{500}=0.194$            | 19.4%         | 324                           |
| 3           | 81                  | $\frac{81}{500}=0.162$            | 16.2%         | 405                           |
| 4           | 30                  | $\frac{30}{500}=0.06$             | 6%            | 435                           |
| 5           | 27                  | $\frac{27}{500}=0.054$            | 5.4%          | 462                           |
| 6           | 20                  | $\frac{20}{500}=0.04$             | 4%            | 482                           |
| ≥7          | 18                  | $\frac{18}{500}=0.036$            | 3.6%          | 500                           |
| Total       | 500                 | 1                                 | 100%          | ---                           |

Con carácter general una tabla para analizar una variable cuantitativa discreta es la que muestra la Tabla 1.6.

Tabla 1.6

Distribución de frecuencias: variable cuantitativa discreta

Aquí tienes la tabla convertida a formato Markdown:

| Valor($x_i$) | Fr. absoluta($n_i$) | Fr. relativa($f_i=\frac{n_{i}}{N}$) | Porcentaje(%)($p_{i}$) | Abs. acumulada $N_{i}=\sum_{j=1}^{i}n_{j}$ | Rel. acumulada $F_{i}=\sum_{j=1}^{i}f_{j}$ | % acumulado $P_{i}=\sum_{j=1}^{i}p_{j}$ |
| ------------ | ------------------- | ----------------------------------- | ---------------------- | ------------------------------------------ | ------------------------------------------ | --------------------------------------- |
| $x_{1}$      | $n_{1}$             | $f_{1}$                             | $100f_{1}$             | $N_{1}=n_{1}$                              | $F_{1}=f_{1}$                              | $P_{1}=p_{1}$                           |
| $x_{2}$      | $n_{2}$             | $f_{2}$                             | $100f_{2}$             | $N_{2}=n_{1}+n_{2}$                        | $F_{2}=f_{1}+f_{2}$                        | $P_{2}=p_{1}+p_{2}$                     |
| ...          | ...                 | ...                                 | ...                    | ...                                        | ...                                        | ...                                     |
| $x_{K}$      | $n_{K}$             | $f_{K}$                             | $100f_{K}$             | $N_{K}=N$                                  | $F_{K}=1$                                  | $P_{K}=100\%$                           |
| Total        | N                   | 1                                   | 100%                   | ---                                        | ---                                        | ---                                     |
## 1.2.3 Variable cuantitativa continua

## Ejemplo 1.5 Tabla para analizar una variable cuantitativa continua

En el caso cuantitativo continuo, aún valiendo los criterios anteriores, se presenta la dificultad de de la formación de las clases. Al considerar el peso de los 500 alumnos (con una precision en gramos), es prácticamente imposible que dos individuos tengan el mismo peso, con lo que la tabla de valores contaría con miles de valores con con frecuencias 0 y 1. Por ejemplo, entre 60 y 61 Kg hay 1000 valores posibles (tanto como gramos).

Para evitar esto, los datos deben agruparse en clases llamadas intervalos de clases: $[ L_{0}, L_{1}), [ L_{1}, L_{2}), \dots, $ $ [ L_{K-1}, L_{K})$
, siendo $L_{i-1}$ y $L_{i}$ límite inferior del intervalo de clase y límite superior respectivamente. La diferencia entre ambos, se llama amplitud de la clase:

$$
a = L _ {i} - L _ {i - 1}.
$$

Por ejemplo, si se decide agrupar a los alumnos de 5 en 5 Kg, la presentación de los datos será como en la Tabla 1.7. Se observa que

- Los intervalos primero (x < 45) y el último (x ≥ 90) no constan de los límites ni tienen igual longitud que los demás. Esto se hace para simplificar la presentación de los datos, igual que se hizo en el último intervalo de la Tabla 1.5. Se dice que son unos intervalos de «cajón de sastre».

- Para facilitar la interpretación de los datos, los cálculos y las representaciones gráficas es conveniente que todos los intervalos de clase tengan la misma longitud.

- En general, el número de clases a tomar es a decidir por el experimentador. Como norma general el número de intervalos ha de estar entre 5 (menos es prácticamente no dar información) y 20 (más, es oscurecer la información global). Una regla muy utilizada es hacer $ K=\sqrt{N}. $

- Para ciertos fines, que se verán después, conviene definir un valor que actuará como representante de cada clase, valor llamado marca de clase:

$$
c _ {i} = \frac {L _ {i - 1} + L _ {i}}{2}.
$$

Para las clases extremas a las que les faltan uno de los límites, se les asigna una longitud ficticia. Así, la primera marca es $ c_{1}=(40+45)/2=42.5 $

<div align="center">

Tabla 1.7

</div>


Distribución del peso (x) en Kg de una muestra de 500 alumnos varones de una Universidad

(variable cuantitativa continua)



Aquí tienes la tabla convertida a formato Markdown:

| Intervalo de clase | $n_{i}$ | $f_{i}$ | %     | Fr. absoluta acumulada($N_{i}$) | Marca de clase($c_{i}$) |
| ------------------ | ------- | ------- | ----- | ------------------------------- | ----------------------- |
| $x<45$             | 1       | 0.002   | 0.2%  | 1                               | 42.5                    |
| $45\leq x<50$      | 3       | 0.006   | 0.6%  | 4                               | 47.5                    |
| $50\leq x<55$      | 12      | 0.024   | 2.4%  | 16                              | 52.5                    |
| $55\leq x<60$      | 75      | 0.150   | 15%   | 91                              | 57.5                    |
| $60\leq x<65$      | 103     | 0.206   | 20.6% | 194                             | 62.5                    |
| $65\leq x<70$      | 155     | 0.310   | 31.0% | 349                             | 67.5                    |
| $70\leq x<75$      | 101     | 0.202   | 20.2% | 450                             | 72.5                    |
| $75\leq x<80$      | 29      | 0.058   | 5.8%  | 479                             | 77.5                    |
| $80\leq x<85$      | 11      | 0.022   | 2.2%  | 490                             | 82.5                    |
| $85\leq x<90$      | 8       | 0.016   | 1.6%  | 498                             | 87.5                    |
| $x\geq90$          | 2       | 0.004   | 0.4%  | 500                             | 92.5                    |
| Total              | 500     | 1       | 100%  | ---                             | ---                     |
<div align="center">

En general una tabla para analizar una variable cuantitativa continua es la que muestra la Tabla 1.8, que también podría contener las frecuencias acumuladas.

</div>

Tabla 1.8
Distribución de frecuencias: variable cuantitativa continua

| Intervalo de clase | Frecuencia absoluta($n_i$) | Frecuencia relativa($f_i$) | %        | Marca de clase |
| ------------------ | -------------------------- | -------------------------- | -------- | -------------- |
| $[L_0,L_1)$        | $n_1$                      | $f_1$                      | 100$f_1$ | $c_1$          |
| $[L_1,L_2)$        | $n_2$                      | $f_2$                      | 100$f_2$ | $c_2$          |
| $\vdots$           | $\vdots$                   | $\vdots$                   | $\vdots$ | $\vdots$       |
| $[L_{K-1},L_K)$    | $n_K$                      | $f_K$                      | 100$f_K$ | $c_K$          |
| Total              | N                          | 1                          | 100%     | ---            |

A continuación formalizamos las definiciones de frecuencias usadas en los ejemplos que nos han permitido clasificar y describir los datos.

| Concepto                                                                                                          | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| N                                                                                                                 | Es el número total de datos (tamaño de la muestra).                                                                                                                                                                                                                                                                                                                                                                            |
| C y $C_1, C_2, \dots, C_K$                                                                                        | Es la variable a analizar y las K clases de esta variable.                                                                                                                                                                                                                                                                                                                                                                     |
| Frecuencia absoluta ($n_i$): Se verifica que $\sum_{i=1}^{K} n_{i}=N$                                             | Es el número de elementos que pertenecen a la clase i de una variable. Como hay varias (tantas como clases), se le adjudica un subíndice i que alude al número de la clase que se trate. Por ejemplo, $n_{3}=25$ significa que el número de individuos, de entre N, que pertenecen a la tercera clase es de 25. Por otra parte, la suma total de todas las frecuencias absolutas debe dar el total de la muestra estudiada, N. |
| Frecuencia relativa ($f_i$): $f_{i}=\frac{n_{i}}{N}$ Se verifica que $\sum_{i=1}^{K} f_{i}=1$                     | Es el cociente entre la frecuencia absoluta, $n_{i}$, de la clase i y el número total de datos, N. Se introducen con el objetivo de hacer comparables dos o más tablas de datos del mismo tipo basadas en tamaños de muestra distintos. La suma de las frecuencias relativas es igual a 1.                                                                                                                                     |
| Porcentaje relativo ($p_i$): $p_{i}=100 f_{i}$                                                                    | Es frecuencia relativa a 100 individuos de la clase i, es decir es un tanto por ciento (%). Se observa que la frecuencia relativa es un tanto por uno.                                                                                                                                                                                                                                                                         |
| Frecuencia absoluta acumulada ($N_i$): $N_{i}=\sum_{j=1}^{i} n_{j}$                                               | Es la suma de las frecuencias absolutas de todas las clases inferiores a la que estamos calculando. Así, $N_{1}=n_{1}, N_{2}=n_{1}+n_{2}, N_{3}=n_{1}+n_{2}+n_{3}, \dots$ y $N_{K}=n_{1}+n_{2}+\dots+n_{K}=N$, es decir la última frecuencia absoluta acumulada deberá ser igual a N.                                                                                                                                          |
| Frecuencia relativa acumulada ($F_i$): $F_{i}=\frac{N_{i}}{N}=\sum_{j=1}^{i}\frac{n_{i}}{N}=\sum_{j=1}^{i} f_{j}$ | Es el cociente entre la frecuencia absoluta acumulada y el número total de individuos.                                                                                                                                                                                                                                                                                                                                         |
| Porcentaje relativo acumulado ($P_i$): $P_{i}=\sum_{j=1}^{i} p_{j}$                                               | Es la suma de los porcentajes relativos de todas las clases inferiores a la que estamos calculando. Así, $P_{1}=p_{1}, P_{2}=p_{1}+p_{2}, P_{3}=p_{1}+p_{2}+p_{3}, \dots$ y $P_{K}=p_{1}+p_{2}+\dots+p_{K}=100$, es decir el último porcentaje relativo acumulado deberá ser igual a 100.                                                                                                                                      |
## 1.3 Representaciones gráficas

Los gráficos facilitan la lectura e interpretación de los datos. Los gráficos pueden ser de varios tipos, pero todos están basados en el principio general de que la figura construida para cada clase deber tener un área proporcional a la frecuencia de esta clase: al lector lo que «le entra» por los ojos es el área de la figura. Los tipos de gráficos que se deben elegir dependen en general de la naturaleza de la variable estudiada.

## 1.3.1 Variable cualitativa

## Diagrama de barras o rectángulos

Este tipo de diagrams se construye sobre un sistema de ejes cartesianos, situando en uno de los ejes las distintas clases y en el otro los valores de las frecuencias, absolutas o relativas. Sobre cada clase se levantan barras o rectángulos de la misma base y altura igual a la frecuencia. Según se sitúen las clases sobre el eje de abscisas o de ordenadas, se tendría diagrama de rectángulos verticales u horizontales.

Figura 1.1
Diagrama de barras (rectángulos verticales) de las frecuencias absolutas de la Tabla 1.2

Figura 1.2
Diagrama de barras (rectángulos horizontales) de las frecuencias absolutas de la Tabla 1.2

## Diagrama de sectores

El gráfico consiste en dibujar una circunferencia de radio arbitrario y dividir su círculo en sectores. A cada clase se le asigna un sector de área (y, por consiguiente, ángulo que lo genera) proporcional a la frecuencia de la clase. Como en los $3 6 0^{\circ}$ de la circunferencia han de estar incluidos los N individuos de la muestra, a una clase de frecuencia absoluta $n_{i}$ se le asigna un sector del ángulo $\alpha_{i}$ definido por:

$$
\alpha_ {i} = \frac {n _ {i}}{N} \times 3 6 0 ^ {\circ} = f _ {i} \times 3 6 0 ^ {\circ}
$$

siendo $f_{i}$ la correspondiente frecuencia relativa.

## Ejemplo 1.6 Diagrama de sectores para una variable cualitativa

En la Figura 1.3, construida en basa a la Tabla 1.9, a la clase «tumores» le corresponde un ángulo

$$
\alpha = 0. 1 9 6 6 \times 3 6 0 ^ {\circ} = 7 0 ^ {\circ} 4 6 ^ {\prime} 3 3. 6 ^ {\prime \prime}
$$

<div align="center">

Tabla 1.9

</div>

<div align="center">

Mortalidad por grupos de causas (España 1979)

</div>

<table border="1"><tr><td>Causa</td><td>Porcentaje(%)</td></tr><tr><td>Aparato circulatorio</td><td>46.07</td></tr><tr><td>Tumores</td><td>19.66</td></tr><tr><td>Aparato respiratorio</td><td>8.59</td></tr><tr><td>Externa</td><td>5.53</td></tr><tr><td>Aparato digestivo</td><td>5.46</td></tr><tr><td>Mal definida</td><td>4.18</td></tr><tr><td>Resto</td><td>10.51</td></tr><tr><td>Total</td><td>100</td></tr></table>

Figura 1.3 Diagrama de sectores para la Tabla 1.9



## Ejemplo 1.7 Diagrama de barras y de sectores para una variable cualitativa

La Tabla 1.10 contiene datos de la distribución de 150 personas de 25 y 45 años de edad, según su estado civil. Y las Figuras 1.4 y 1.5 muestran el diagrama de barras y se sectores, respectivamente.


Tabla 1.10
Distribución de frecuencias de 150 personas de 25 a 45 años, según su estado civil

<table border="1"><tr><td>Estado</td><td>Soltero</td><td>Casado</td><td>Viudo</td><td>Divorciado</td><td>No declarado</td><td>Total</td></tr><tr><td>Fr. absoluta</td><td>20</td><td>78</td><td>15</td><td>26</td><td>11</td><td>150</td></tr></table>

Figura 1.4

Diagrama de barras para la Tabla 1.10


Figura 1.5
Diagrama de sectores para la Tabla 1.10

## Pictograma

En este tipo de gráfico cada variable se representa por una figura no geométrica, por ejemplo un automóvil, un edificio, una herramienta de trabajo,etc. Las figuras habrán de tener un área proporcional a la frecuencia de las clases y esto puede lograrse por dos caminos.

En los pictogramas de repetición se asigna un valor a una figura base, y esta se repite tantas veces como convenga a la frecuencias de las clase.

En los pictogramas de ampliación, a cada clase se le asigna una única figura-motivo con un área proporcional a la frecuencia de aquella. En este último caso, si dos clases tienen frecuencias una doble de la otra, la figura-motivo debe tener un área doble de la otra.

Tabla 1.11
Producción de vinos en Andalucía durante un año

<table border="1"><tr><td>Provincia</td><td>Porcentaje(%)a</td></tr><tr><td>Huelva</td><td>21.97</td></tr><tr><td>Sevilla</td><td>4.39</td></tr><tr><td>Cádiz</td><td>32.96</td></tr><tr><td>Málaga</td><td>27.47</td></tr><tr><td>Granada</td><td>7.69</td></tr><tr><td>Almería</td><td>3.29</td></tr><tr><td>Jaén</td><td>2.19</td></tr><tr><td>Total</td><td>100</td></tr></table>

$^{a}$Los datos son inventados


Figura 1.6
Pictograma para la Tabla 1.11
## 1.3.2 Variable cuantitativa discreta

## Diagrama de barras o rectángulos

Cuando la variable es discreta y toma pocos valores, el gráfico adecuado es el diagrama de barras o rectángulos. Se construye de la misma forma que para las variables cualitativas pero ahora sobre el eje de abscisas se sitúan los valores de la variable. Es decir, una vez colocados los valores de la variable en el eje de abscisas, se levantan sobre ellos unos segmentos (barras) de altura igual a la frecuencia correspondiente.

Según se tome la frecuencia absoluta o relativa, la suma de las longitudes de todas las barras será $N$ o 1. La Figura 1.7 representa el diagrama de barras para la Tabla 1.5. Nótese que las clases extremas, que no tienen igual longitud que las demás, conviene dibujarlas con igual anchura. Tal sucede con la barra $\ll \ge 7$ de la Figura 1.7.

## Polígono de frecuencias simples

Se trazan unos ejes cartesianos: a cada clase se le asigna un punto en el plano, con una abscisa que es el valor del dato, y una ordenada que es su frecuencia. La serie de puntos así obtenida se conecta mediante segmentos rectos, obteniendo una poligonal.

De nuevo, los polígonos pueden ser de frecuencias absolutas o de frecuencias relativas. El polígono de frecuencias es especialmente útil para ver cómo evolucionan las frecuencias conforme aumenta el valor de datos. Por ello no es aplicable a los datos cualitativos no ordinales (el grupo sanguíneo A no tiene por qué ir por delante de B, etc).

Figura 1.7
Diagrama de barras de frecuencias absolutas de la Tabla 1.5

Figura 1.8
Polígono de frecuencias absolutas para las frecuencias absolutas de la Tabla 1.5

## Diagrama de frecuencias acumuladas

Cuando la variable estadística es discreta se puede representar el diagrama de frecuencias acumuladas o escalonado. Pueden ser las frecuencias acumuladas absolutas, relativas o porcentajes acumulados.

En la Figura 1.9 se representan las frecuencias absolutas acumuladas de correspondientes a la Tabla 1.5.

Figura 1.9
Diagrama de frecuencias absolutas acumuladas de la Tabla 1.5

Figura 1.10
Polígono de frecuencias absolutas acumuladas de la Tabla 1.5

## Polígono de frecuencias acumuladas

El gráfico formado por los puntos cuyas abscisas son los valores de la variable y sus ordenadas la frecuencia acumulada, unidos por segmentos, es el polígono de frecuencias acumuladas.

La Figura 1.10 muestra el polígono de frecuencias absolutas acumuladas correspondientes a la Tabla 1.5.

## 1.3.3 Variable cuantitativa continua

## Histograma

Cuando la variable estadística es cuantitativa continua, se utiliza el histograma, cuya representación está fundamentada en la proporcionalidad de las áreas de rectángulos a las frecuencias de cada clase.

El histograma es una extensión del diagrama de barras que dibuja los rectángulos unidos entre sí, indicando de este modo que existe continuidad en los valores de las variables. Un histograma es, por tanto, un gráfico de variable continua dividida en intervalos de los que se eleva un rectángulo con área proporcional a su frecuencia. Obsérvese que lo que es proporcional es el área, no la altura, lo que permite intervalos de diferente amplitud. Una vez más resulta irrelevante trabajar con frecuencias absolutas o relativas.

Si se trata de intervalos de la misma amplitud, la altura de cada uno de los rectángulos se toma igual a la frecuencia correspondiente.

Si se trata de intervalos de amplitudes diferentes, como en el la Tabla 1.12 del Ejemplo 1.8, la altura de cada rectángulo $ h_{i} $ conocida como densidad de frecuencia del intervalo $ [L_{i-1}, L_{i}) $ , es igual a la frecuencia absoluta 
$n_{i}$ dividida por la amplitud del intervalo correspondiente, $a_{i}$ , es decir

$$
h _ {i} = \frac {n _ {i}}{a _ {i}}
$$

donde $a_{i}$ viene dada por (1.1).

En la Figura 1.12 se representa histograma de frecuencias absolutas de la Tabla 1.12.

El área del rectángulo correspondiente a la clase i-ésima es:

Figura 1.11 Histograma de frecuencias absolutas de la Tabla 1.12



$$
s _ {i} = h _ {i} a _ {i} = \frac {n _ {i}}{a _ {i}} a _ {i} = n _ {i}
$$

y la suma de las áreas de todos los rectángulos es:

$$
S = \sum_ {i = 1} ^ {K} n _ {i} = N
$$

Es claro que si se toman frecuencias relativas, la suma de las áreas es igual a 1.

Por otra parte se observa que, las clases extremas, como las de la Tabla 1.7, conviene dibujarlas con igual anchura. En la Figura 1.12 se representa histograma de frecuencias absolutas de la Tabla 1.7.

Figura 1.12

Histograma de frecuencias absolutas de la Tabla 1.7
## Polígono de frecuencias simples

A partir de un histograma pueden construirse otros tipos de gráficos. Por ejemplo, los gráficos de línea consisten en unir los puntos medios de todos los intervalos contiguos mediante una recta, construyendo así un polígono de frecuencias, como muestra la Figura 1.13 del Ejemplo 1.8.

## Ejemplo 1.8 Una variable cuantitativa continua con intervalos de amplitudes diferentes

La Tabla 1.12 contiene datos de la distribución de notas de 98 alumnos. Se observa que los intervalos de clase tienen longitudes diferentes.

Tabla 1.12

Distribución de frecuencias de notas de 98 alumnos en una clase

<table border="1"><tr><td>Notas</td><td>$n_{i}$</td><td>$f_{i}$</td><td>%</td><td>$h_{i}$</td><td>marca</td></tr><tr><td>[0,3)</td><td>24</td><td>0.24</td><td>24%</td><td>8</td><td>1.5</td></tr><tr><td>[3,5)</td><td>34</td><td>0.35</td><td>35%</td><td>17</td><td>4</td></tr><tr><td>[5,7)</td><td>26</td><td>0.27</td><td>27%</td><td>13</td><td>6</td></tr><tr><td>[7,9)</td><td>10</td><td>0.10</td><td>10%</td><td>5</td><td>8</td></tr><tr><td>[9,10)</td><td>4</td><td>0.04</td><td>4%</td><td>4</td><td>9.5</td></tr><tr><td>Total</td><td>98</td><td>1</td><td>100%</td><td>- - -</td><td>- - -</td></tr></table>

Figura 1.13
Polígono de frecuencias absotutas enmarcado en el histograma para la Tabla 1.12

## Polígono de frecuencias acumuladas

El polígono de frecuencias acumuladas se utiliza para representar distribuciones de frecuencias (relativas o absolutas) acumuladas.

En el eje OX se representan los extremos de las clases. Se asigna la ordenada cero al extremo inferior del primer intervalo, es decir $ L_{0}=0 $ y a cada extremo derecho de las clases se le asigna como ordenada la frecuencia acumulada (absoluta, relativa o porcentual). La poligonal que une dichos puntos es el polígono de frecuencias acumuladas (véase el Ejemplo 1.9).

El hecho de tomar ahora la poligonal de los extremos a la derecha de los rectángulos es que, suponiendo uniformemente distribuido el número de individuos en cada clase, dicha poligonal debería reflejar al final de cada intervalo el total de individuos en él contenido.

## Ejemplo 1.9

<div align="center">

En la figura de la derecha se muestran el histograma y el polígono de frecuencias absolutas acumuladas para los datos de la tabla siguiente:

</div>

<table border="1"><tr><td>Peso(Kg.)</td><td>Fr. absoluta($n_i$)</td><td>Fr. acumulada$N_i$</td></tr><tr><td>[20,40)</td><td>12</td><td>12</td></tr><tr><td>[40,60)</td><td>49</td><td>61</td></tr><tr><td>[60,80)</td><td>32</td><td>93</td></tr><tr><td>[80,100)</td><td>9</td><td>102</td></tr><tr><td>Total</td><td>102</td><td>- - -</td></tr></table>

## 1.4 Medidas estadísticas

Agrupar los datos en tablas de frecuencias es un primer paso en el análisis estadístico de los mismos. Además, es conveniente resumir dichos datos en un solo número, que describa de una manera sencilla su comportamiento y sus características. Se trata de calcular las llamadas medidas estadísticas que pretenden «resumir» la información de la muestra para poder tener así un mejor conocimiento de la población.

Las medidas estadísticas suelen dividirse en medidas de posición o de tendencia central y medidas de dispersion. Parece claro que el cálculo de estas medidas requiere la posibilidad de efectuar operaciones con los valores que toma la variable. Por este motivo, en lo que resta del tema tratamos sólo con variables cuantitativas.

## 1.4.1 Medidas de posición o de tendencia central

Consideraremos aquí las más utilizadas: la media aritmética y la mediana. Hay otras medidas de tendencia central, por ejemplo la moda, la media geométrica, la media cuadrática, la media armónica etc. que se utilizan en algunos procesos de carácter más específico y se escapan del objetivo de este tema.

## Media aritmética

Media aritmética: caso discreto

Sea X una variable estadística cuantitativa que toma valores $ x_{1}, x_{2}, \dots, x_{K} $ con frecuencias absolutas $ n_{1}, n_{2}, $ $ \dots, n_{K} $ y N el tamaño de la muestra. Se define la media aritmética $ \overline{x} $ como el valor:

$$
\bar {x} = \frac {x _ {1} n _ {1} + x _ {2} n _ {2} + \cdots + x _ {K} n _ {K}}{N} = \frac {1}{N} \sum_ {i = 1} ^ {K} x _ {i} n _ {i}
$$

Ejemplo 1.10

La media aritmética de la variable «nota» distribuida en intervalos de clase de la Tabla 1.12 es:

$$
\overline {{x}} = \frac {1 . 5 \times 2 4 + 4 \times 3 4 + 6 \times 2 6 + 8 \times 1 0 + 9 . 5 \times 4}{9 8} = 4. 5 5
$$

Siempre que se hace un cálculo, surge la pregunta ¿cuántas cifras decimales deben darse en la respuesta final? No existen normas estrictas para ello. Utilizaremos la convención de que, al calcular medias, el resultado se expresará con hasta una o dos cifras decimales más que los datos. Para calcular las frecuencias relativas usaremos al menos 4 cifras decimales, ya que con menos cifras se generarán errores considerables en los porcentajes. La última cifra decimal se hallará mejor por redondeo que por truncamiento.

## Advertencia:

Al hacer una serie de cálculos no hay que redondear los resultados hasta que se finalicen todos los cálculos, de lo contrario, se acumularían los errores de redondeo.

## Ejemplo 1.11

<div align="center">

La siguiente tabla de frecuencias muestra las calificaciones de 20 alumnos de Matemáticas:

</div>

<table border="1"><tr><td>Nota(xi)</td><td>Fr. absoluta(ni)</td><td>Fr. absoluta acumuladaNi</td></tr><tr><td>2</td><td>3</td><td>3</td></tr><tr><td>4</td><td>6</td><td>9</td></tr><tr><td>5</td><td>5</td><td>14</td></tr><tr><td>6</td><td>3</td><td>17</td></tr><tr><td>8</td><td>1</td><td>18</td></tr><tr><td>10</td><td>2</td><td>20</td></tr><tr><td>Total</td><td>20</td><td>- - -</td></tr></table>

La nota media es

$$
\overline {{x}} = \frac {2 \times 3 + 4 \times 6 + 5 \times 5 + 6 \times 3 + 8 \times 1 + 1 0 \times 2}{2 0} = \frac {1 0 1}{2 0} = 5. 0 5
$$

## La media: caso continuo

Cuando la variable X es cuantitativa continua y está distribuida en intervalos de clase, la media aritmética se calcula considerando las marcas de clase $ c_{i} $ y las frecuencias absolutas $ n_{i}, i=1,2\dots, K $ de cada clase:

$$
\bar {x} = \frac {c _ {1} n _ {1} + c _ {2} n _ {2} + \cdots + c _ {K} n _ {K}}{N} = \frac {1}{N} \sum_ {i = 1} ^ {K} c _ {i} n _ {i}
$$

## Mediana

La mediana de los datos ordenados de menor a mayor es el valor (perteneciente o no a la muestra) que deja a su izquierda el mismo número de valores que a su derecha (50 % a su izquierda y 50 % a su derecha), es decir divide la muestra en dos partes iguales.

Cálculo de la mediana: pocos datos

Sean $ X=(x_{1},x_{2},\ldots,x_{N}) $ , N datos a analizar.

- Si N es impar, la mediana es el valor que ocupa la posición (N+1)/2:

$$
M _ {e} = x _ {\frac {N + 1}{2}}
$$

- Si N es par, la mediana es la media aritmética de los dos valores centrales:

$$
M _ {e} = \frac {x _ {N / 2} + x _ {N / 2 + 1}}{2}
$$

## Ejemplo 1.12

Sea X = (3,6,7,8,9) una variable ordenada que toma un número impar de valores: N = 5 (impar). La mediana $ M_{e}=7 $ es el valor que ocupa la posición central (deja 3 datos antes y 3 datos después de ella):

$$
M _ {e} = x _ {\frac {5 + 1}{2}} = x _ {3} = 7.
$$

## Ejemplo 1.13

Sea $ X=(3,5,7,12,13,14,21,23,23,23,23,29,39,40,56) $ una variable ordenada que toma un número impar de valores: $ N=15 $ (impar). La mediana $ M_{e} $ es el valor que ocupa la posición central es $ M_{e}=23 $ , ya que

$$
M _ {e} = x \frac {1 5 + 1}{2} = x _ {8} = 2 3.
$$

Luego la mediana $ M_{e}=2 3 $ deja 7 datos antes y 7 datos después de ella.

## Ejemplo 1.14

Sea X = (3,6,7,8,9,10) una variable ordenada que toma un número par de valores: N = 6 (par). La mediana $ M_{e} $ la media aritmética que los dos valores centrales:

$$
M _ {e} = \frac {x _ {\frac {N}{2}} + x _ {\frac {N}{2} + 1}}{2} = \frac {x _ {\frac {6}{2}} + x _ {\frac {6}{2} + 1}}{2} = \frac {x _ {3} + x _ {4}}{2} = \frac {7 + 8}{2} = 7. 5
$$

que deja 2 valores por debajo y 2 valores por encima de ella.

## Ejemplo 1.15

Sea X = (3,5,7,12,13,14,21,23,23,23,23,29,40,56) una variable ordenada que toma un número par de valores: N = 14 (par). La mediana $ M_{e} $ es el valor que ocupa la posición central es $ M_{e}=2 3 $ , ya que

$$
M _ {e} = \frac {x _ {\frac {N}{2}} + x _ {\frac {N}{2} + 1}}{2} = \frac {x _ {\frac {1 4}{2}} + x _ {\frac {1 4}{2} + 1}}{2} = \frac {x _ {7} + x _ {8}}{2} = \frac {2 1 + 2 3}{2} = \frac {4 4}{2} = 2 2
$$

Luego la mediana $ M_{e}=2 2 $deja 7 datos antes y 7 datos después de ella.

Cuando los datos están agrupados en forma de tabla de frecuencias, el cálculo de la mediana se facilita con la anotación de las frecuencias acumuladas. Se pueden usar frecuencias absolutas, relativas o porcentajes acumulados. Aquí, vamos usar los porcentajes acumulados, ya que el mismo procedimiento nos va a servir para el cálculo de los percentiles (véase la Sección 1.4.2).

Cálculo de la mediana: caso discreto

1. Construir la tabla de percentajes acumulados $ P_{i} $

2. Ubicar el porcentaje 50 % tal que $ P_{i-1}\leq 50\% < P_{i}. $

- Si $ P_{i-1} < 50\% $ , es decir no coincide con $ P_{i-1} $ , entonces

$$
M _ {e} = x _ {i}
$$

- Si $ P_{i-1}=50\% $ , entonces

$$
M _ {e} = \frac {x _ {i - 1} + x _ {i}}{2}
$$

donde: $ x_{i} $ = valor de X correspondiente a $ P_{i} $; $ x_{i-1} $ = valor de la variable X correspondiente a $ P_{i-1} $ .

## Ejemplo 1.16

Vamos a calcular la media de los datos de tabla de distribución de calificaciones del Ejemplo 1.11. Construimos la tabla de porcentajes acumulados.

<table border="1"><tr><td>Nota(xi)</td><td>Fr. absoluta(ni)</td><td>Fr. relativa</td><td>%</td><td>% acumulado</td></tr><tr><td>2</td><td>3</td><td>0.15</td><td>15</td><td>15</td></tr><tr><td>4</td><td>6</td><td>0.30</td><td>30</td><td>45</td></tr><tr><td>5</td><td>5</td><td>0.25</td><td>25</td><td>70</td></tr><tr><td>6</td><td>3</td><td>0.15</td><td>15</td><td>85</td></tr><tr><td>8</td><td>1</td><td>0.05</td><td>5</td><td>90</td></tr><tr><td>10</td><td>2</td><td>0.10</td><td>10</td><td>100</td></tr><tr><td>Total</td><td>20</td><td>1</td><td>100</td><td>- - -</td></tr></table>

Tenemos que

$$
P _ {2} = 45 \% < 50 \% < P _ {3} = 70 \% ,
$$

de donde

$$
M _ {e} = x _ {3} = 5.
$$

Esto significa que la mitad de la clase ha obtenido un 5 o menos, y la otra mitad un 5 o más.

## Ejemplo 1.17

<div align="center">

Vamos a calcular la mediana de los datos de la siguiente tabla de distribución de frecuencias de calificaciones en una clase:

</div>

<table border="1"><tr><td>Nota(xi)</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr><tr><td>Fr. absoluta(ni)</td><td>2</td><td>2</td><td>4</td><td>5</td><td>6</td><td>9</td><td>4</td><td>4</td><td>2</td></tr><tr><td>Fr. relativa</td><td>0.0526</td><td>0.0526</td><td>0.1053</td><td>0.1316</td><td>0.1579</td><td>0.2368</td><td>0.1053</td><td>0.1053</td><td>0.0526</td></tr><tr><td>%</td><td>5.26</td><td>5.26</td><td>10.53</td><td>13.16</td><td>15.79</td><td>23.68</td><td>10.53</td><td>10.53</td><td>5.26</td></tr><tr><td>% acumulado</td><td>5.26</td><td>10.53</td><td>21.05</td><td>34.21</td><td>50</td><td>73.68</td><td>84.21</td><td>94.74</td><td>100</td></tr></table>

Tenemos que

$$
50 \% = P _ {5} = 50 \% < P _ {6} = 73.68 \% ,
$$

es decir 50 % = P5, de donde la mediana es

$$
M _ {e} = \frac {x _ {5} + x _ {6}}{2} = \frac {5 + 6}{2} = 5. 5,
$$

lo que significa que la mitad de la clase ha obtenido un 5.5 o menos y la otra mitad un 5.5 o más.



## Cálculo de la mediana: caso continuo

1. Construir la tabla de percentajes acumulados $ P_{i} $ .

2. Ubicar el 50 % tal que

$$
P _ {i - 1} \leq 50 \% < P _ {i}
$$

3. Si $ L_{i-1} $ y $ L_{i} $ son los límites inferior y superior del intervalo correspondientes a $ P_{i-1} $ y $ P_{i} $ respectivamente, entonces la mediana $ M_{e} $ es la abscisa del punto situado en la recta que interpola los valores $ (L_{i-1}, P_{i-1}) $ y $ (L_{i}, P_{i}) $ , cuya ordenada es igual 50 %.


Se recuerda que la recta que interpola los valores $ ( L_{i-1}, P_{i-1} ) $ y $ ( L_{i}, P_{i} ) $ viene dada por:

$$
y = P _ {i - 1} + \frac {P _ {i} - P _ {i - 1}}{L _ {i} - L _ {i - 1}} \left(x - L _ {i - 1}\right).
$$

Luego, $ M_{e}=x $ para $ y=50 $ , despejando la x de la ecuación (1.5), obtenemos:

$$
M _ {e} = L _ {i - 1} + \frac {5 0 - P _ {i - 1}}{P _ {i} - P _ {i - 1}} \left(L _ {i} - L _ {i - 1}\right).
$$

## Ejemplo 1.18

Vamos a calcular la mediana de los datos de la siguiente tabla de distribución de frecuencias de peso (en Kg.) de 102 personas en una clase:

<table border="1"><tr><td>Peso(Kg.)</td><td>Fr. absoluta($n_i$)</td><td>Fr. relativa($f_i$)</td><td>%</td><td>% Acumulados</td></tr><tr><td>[20,40)=[L0,L1)</td><td>12</td><td>0.1176</td><td>11.76%</td><td>11.76%</td></tr><tr><td>[40,60)=[L1,L2)</td><td>49</td><td>0.4803</td><td>48.03%</td><td>59.80%</td></tr><tr><td>[60,80)=[L2,L3)</td><td>32</td><td>0.3137</td><td>31.37%</td><td>91.18%</td></tr><tr><td>[80,100)=[L3,L4)</td><td>9</td><td>0.088</td><td>8.8%</td><td>100%</td></tr><tr><td>Total</td><td>102</td><td>1</td><td>100%</td><td>- - -</td></tr></table>

Tenemos 50 $ \in $ [11.76,59.80] $ = [P_{1},P_{2}]$ y $ L_{1}=40, $ $ L_{2}=60. $

Por tanto, aplicando la fórmula (1.6) deducimos

$$
M _ {e} = 4 0 + \frac {5 0 - 1 1 . 7 6}{5 9 . 8 0 - 1 1 . 7 6} (6 0 - 4 0) \approx 5 5. 9 2.
$$


## 1.4.2 Percentiles

Existen medidas basadas en el orden de las observaciones. Hemos visto que la mediana es el valor que hace que el 50 % de los datos sean anteriores a ella y el otro 50 % posteriores. Cuando la muestra ordenada se divide en 100 partes iguales se obtienes los percentiles, denotados por $ p_{1}, p_{2}, \dots p_{99} $ . El percentil $ p_{50} $ coincide con la mediana.

Percentil i es aquel valor $ p_{i} $ que deja a su izquierda el i % y el resto por encima de los valores de la muestra ordenada de menor a mayor.

Por ejemplo, el percentil 57 es el que hace que el 57 % de los datos son anteriores a él y el 43 % son posteriores. Los percentiles son muy utilizados para describir los casos «raros» de las poblaciones. Así, afirmar que el precentil 10 del peso de los niños varones recién nacidos es 2700 gramos significa que sólo un 10 % de ellos tienen un peso inferior a 2700 gramos.

## Cálculo de percentiles

Para calcular el percentil $ p_{\ell} $ , se procede de modo análogo al cálculo e la mediana. Basta sustituir el 50 % por $ p_{\ell} $ . Observemos que, en el caso de las distribuciones de variables continuas , el prercentil $ p_{\ell} $ se calcula usando la fórmula:

$$
p _ {\ell} = L _ {i - 1} + \frac {p _ {\ell} - P _ {i - 1}}{P _ {i} - P _ {i - 1}} \left(L _ {i} - L _ {i - 1}\right)
$$

## Ejemplo 1.19 Datos agrupados en una tabla de frecuencias: caso continuo

Para los datos del Ejemplo 1.18 vamos a calcular el percentil 70, $ p_{70} $ , es decir el valor del peso por debajo del cual se encuentra el 70 % de los alumnos.

Tenemos que 70 $ \in[P_{2}, P_{3}]=[59.80, 91.18] $ y $ L_{2}=60, L_{3}=80. $ Por tanto, aplicando la fórmula (1.7), obtenemos

$$
p _ {7 0} = 6 0 + \frac {7 0 - 5 9 . 8 0}{9 1 . 1 8 - 5 9 . 8 0} (8 0 - 6 0) \approx 5 3. 5 0
$$

El percentil 70 es 53.5 significa que el 70 % de los alumnos tienen peso por debajo de 53.5 kilos y los demás por encima.

## Ejemplo 1.20

Para los datos del Ejemplo 1.18 vamos a responder a las siguientes preguntas:

a) ¿Qué porcentaje de alumnos tienen un peso menor que 60?

b) Suponiendo que los datos se distribuyen de modo homogéneo en cada intervalo, determinar el porcentaje de alumnos que tienen un peso menor que 65.

## Solución:

a): De la tabla del Ejemplo 1.18, se deduce fácilmente que el porcentaje de alumnos que tienen peso menor que 60 es 59.8 %

b): Se trata de determinar el porcentaje de alumnos cuyo peso es menor que 65. Se observa que 65 $ \in $ [60,80). Tenemos $ L_{2}=60 $ y $ L_{3}=80 $ y $ P_{2}=59.80 $ y $ P_{3}=91.18 $ los porcentajes acumulados correspondientes.

El porcentaje buscado es la ordenada, y, de la recta que interpola los valores $ ( L_{2}, P_{2} ) $ y $ ( L_{3}, P_{3} ) $ correspondiente a la abscisa $ x=65. $

Usando la fórmula (1.5), se tiene trivialmente que

$$
y = P _ {2} + \frac {P _ {3} - P _ {i - 2}}{L _ {3} - L _ {2}} (x - L _ {2}), \quad \mathrm {d e d o n d e}
$$


$$
y = 5 9. 8 0 + \frac {9 1 . 1 8 - 5 9 . 8 0}{8 0 - 6 0} (6 5 - 6 0) \approx 6 7. 6 4
$$

Luego el 67.64 % de alumnos tiene un peso menor que 65, es decir el valor 65 es el precentil 67.64.

## 1.4.3 Medidas de dispersión: varianza y desviación típica

La media representa el centro de la distribución, pero ¿hasta qué punto representa a cada individuo? Sería ingenuo creer que todas las observaciones se sitúan en de la media. Las medidas de dispersion expresan el grado de desviación de los datos respecto de las medidas de tendencia central, es decir la situación relativa de los datos, proximidad o alejamiento entre ellos.

## Ejemplo 1.21

Las calificaciones obtenidas en los tres exámenes parciales de una asignatura por un alumno han sido 5, 6 y 7 y por otro alumno 9, 7 y 2, la distribución de puntuaciones presenta en ambos casos, una media aritmética igual a 6. En primer caso, las calificaciones son valores de gran proximidad y en el segundo esta separación es notablemente mayor.

Desviación de una variable $ X=(x_{1},x_{2},\dots,x_{K}) $ respecto de una característica de tendencia central C (por ejemplo, la media aritmética, mediana, etc. ) es la cantidad

$$
D _ {C} = x _ {i} - C \quad \mathrm {o t a m b i e n} \quad D _ {C} = | x _ {i} - C |
$$

Según sea la característica de tendencia central C, se tienen distintos índices de dispersion (desviación de la media, desviación de la mediana, ...).

## Ejemplo 1.22

Se ha preguntado a los 5 últimos pacientes que han entrado en la consulta, por el número de parejas que han tenido en los últimos 48 meses. Sus respuestas están recogidas en la tabla que sigue:

<table border="1"><tr><td>Paciente</td><td>Número de parejas(xi)</td><td>Desviación de la media(xi-x)</td><td>|xi-x2|</td></tr><tr><td>1</td><td>1</td><td>+3=4-1</td><td>9</td></tr><tr><td>2</td><td>3</td><td>+1=4-3</td><td>1</td></tr><tr><td>3</td><td>4</td><td>0=4-4</td><td>0</td></tr><tr><td>4</td><td>5</td><td>-1=4-5</td><td>1</td></tr><tr><td>5</td><td>7</td><td>-3=4-7</td><td>9</td></tr><tr><td>Total</td><td>20</td><td>0</td><td>20</td></tr></table>

La media es $ \overline{x}=2 0 / 5=4 $ . El promedio de las desviaciones de las medias al cuadrado es $ s^{2}=2 0 / 5=4 $ , cálculo conocido por el nombre de la varianza. Para eliminar el cuadrado se hace la raíz cuadrada, de donde se obtiene la desviación típica es de 2 parejas. Este valor representa, pues, la distancia o desvío (de la media) típico en todas las observaciones. Por esta razón recibe el nombre de desviación típica.

La varianza se denota $ s^{2} $ (a veces, en algunas calculadoras se denota también como $ \sigma_{n}^{2} $ ), se define como la media aritmética de los cuadrados de las desviaciones a la media

$$
s ^ {2} = \frac {1}{N} \sum_ {i = 1} ^ {K} \left(x _ {i} - \bar {x}\right) ^ {2} n _ {i}
$$

Es claro que si la varianza es nula, todos los valores de la variable coinciden con la media (dispersión es nula):

$$
s ^ {2} = 0 \Leftrightarrow \frac {1}{N} \sum_ {i = 1} ^ {K} \left(x _ {i} - \bar {x}\right) ^ {2} n _ {i} = 0 \Leftrightarrow x _ {i} - \bar {x} = 0 \Leftrightarrow x _ {i} = \bar {x} \quad \forall i = 1, \dots , K.
$$

Por otro lado, cuanto más alejadas estén las observaciones de la media, mayor será la varianza.

## PROPIEDAD DE LA VARIANZA

<table border="1"><tr><td>$s^{2}=\frac{1}{N}\sum_{i=1}^{K}(x_{i}-\overline{x})^{2}n_{i}=\frac{1}{N}\sum_{i=1}^{K}x_{i}^{2}n_{i}-\overline{x}^{2}$</td><td>La varianza es la diferencia entre la media de los cuadrados y el cuadrado de la media(Teorema de König).Se puede simplificar el cálculo de la varianza usando la esta propiedad.</td></tr></table>

La varianza es fácil de tratar matematicamente, por lo que es la medida de dispersion más utilizada en la inferencia estadística. Su principal inconveniente es que viene expresada en unidades que son el cuadrado de las unidades de las observaciones originales ( $ \mathrm{c m^{2}} $ si x se mide en cm).

La desviación típica es la raíz cuadrada positiva de la varianza

$$
s = + \sqrt {s ^ {2}} = \sqrt {\frac {1}{N} \sum_ {i = 1} ^ {K} \left(x _ {i} - \bar {x}\right) ^ {2} n _ {i}}
$$

## PROPIEDAD DE LA DESVIACIÓN TÍPICA

<table border="1"><tr><td>$s=\sqrt{\frac{1}{N}\sum_{i=1}^{K}(x_{i}-\overline{x})^{2}n_{i}}=\sqrt{\frac{1}{N}\sum_{i=1}^{K}x_{i}^{2}n_{i}-\overline{x}^{2}}$</td><td>Se obtiene usando el Teorema de König.Esta propiedad puede permitir simplificar el cálculo de la desviación típica.</td></tr></table>

## Ejemplo 1.23

<div align="center">

Consideramos los datos de la tabla del Ejemplo 1.11 que tienen la media aritmética $ \overline{x}=5.05. $

</div>

<table border="1"><tr><td>Nota(xi)</td><td>Fr. absoluta(ni)</td><td>(xi-$\bar{x}$)2</td><td>(xi-$\bar{x}$)2ni</td><td>xi2</td><td>xi2ni</td></tr><tr><td>2</td><td>3</td><td>9.3025</td><td>27.9075</td><td>4</td><td>12</td></tr><tr><td>4</td><td>6</td><td>1.1025</td><td>6.6150</td><td>16</td><td>96</td></tr><tr><td>5</td><td>5</td><td>0.0025</td><td>0.0125</td><td>25</td><td>125</td></tr><tr><td>6</td><td>3</td><td>0.9025</td><td>2.7075</td><td>36</td><td>108</td></tr><tr><td>8</td><td>1</td><td>8.7025</td><td>8.7025</td><td>64</td><td>64</td></tr><tr><td>10</td><td>2</td><td>24.5025</td><td>49.0050</td><td>100</td><td>200</td></tr><tr><td>Total</td><td>20</td><td></td><td>94.95</td><td></td><td>605</td></tr></table>

Usando la definición tenemos la varianza y la desviación típica

$$
s ^ {2} = \frac {1}{N} \sum_ {i = 1} ^ {6} \left(x _ {i} - \bar {x}\right) ^ {2} n _ {i} = \frac {9 4 . 9 5}{2 0} = 4. 7 4 7 5 \quad \mathrm {y} \quad s = + \sqrt {s ^ {2}} = 2. 1 7 8 8.
$$

Por otro lado, usando el Teorema de de König, los cálculos se simplifican:

$$
s ^ {2} = \frac {1}{N} \sum_ {i = 1} ^ {6} x _ {i} ^ {2} n _ {i} - \bar {x} ^ {2} = \frac {6 0 5}{2 0} - (5. 0 5) ^ {2} = 4. 7 4 7 5
$$

## Coeficiente de variación de Pearson

Cuando se quiere comparar el grado de dispersion de dos distribuciones que no vienen dadas por la misma unidad, se introduce un número independiente de las unidades de mediada de las variables.

El coeficiente de variación de Pearson es:

$$
C V = \frac {s}{\bar {x}}, \quad \mathrm {s i} \quad \bar {x} \neq 0.
$$

Este coeficiente es un número abstracto, ya que es cociente de dos cantidades de una misma magnitud, y representa la desviación típica medida en unidades de la media aritmética. Se acostumbra expresar este coeficiente en tantos por ciento, caso en el que su valor está dado por

$$
V = \frac {s}{\overline {{x}}} \times 1 0 0
$$

Se observa que cuanto menor sea CV mayor es la precision del método. Cuanto mayor sea el coeficiente de variación menor será la representatividad de la medida.

## Ejemplo 1.24

Los alumnos de un grupo de primer curso han sido calificados en matemáticas de 0 a 50 y en Física de 0 a 10:

<table border="1"><tr><td colspan="2">Matemáticas</td><td colspan="2">Física</td></tr><tr><td>Calificaciones</td><td>N° de alumnos</td><td>Calificaciones</td><td>N° alumnos</td></tr><tr><td>15</td><td>3</td><td>2</td><td>12</td></tr><tr><td>25</td><td>5</td><td>3</td><td>9</td></tr><tr><td>35</td><td>8</td><td>5</td><td>12</td></tr><tr><td>40</td><td>14</td><td>6</td><td>5</td></tr><tr><td>45</td><td>16</td><td>7</td><td>4</td></tr><tr><td>47</td><td>5</td><td>9</td><td>4</td></tr><tr><td>49</td><td>3</td><td>10</td><td>8</td></tr><tr><td>Total</td><td>54</td><td>Total</td><td>54</td></tr></table>

¿ Cuál de las dos distribuciones es más homogénea con respecto a la nota media. ?

La media de calificaciones en Matemáticas es de 39.11 y la desviación típica es de 8.65, luego el coeficiente de variación de Pearson es:

$$
C V _ {1} = \frac {8 . 6 5}{3 9 . 1 1} = 0. 2 2 1
$$

y expresado en porcentajes es:

$$
V _ {1} = 0. 2 2 1 \times 1 0 0 = 2 1. 1 \%
$$

La calificación media de Física es 5.27 y la desviación típica es 2.80, luego el coeficiente de variación de Pearson es:

$$
C V _ {2} = \frac {2 . 8 0}{5 . 2 7} = 0. 5 3 1
$$

y expresado en porcentajes es:

$$
V _ {2} = 0. 5 3 1 \times 1 0 0 = 5 3. 1 \%.
$$

Tenemos $ V_{1}<V_{2} $ , por tanto hay mayor homogeneidad en las calificaciones de Matemáticas.

## Bibliografía

[1] E. Cobo, P. Muñoz, J.A. González, Bioestadística para no estadísticos, Madrid, Elsevier España, 2007.

[2] A. Martín Andrés, J.D. Luna del Castillo, Bioestadística para las Ciencias de la Salud, Ediciones Norma-Capitel, Madrid, 2004.

## Índice de Tema 1

1. Estadística descriptiva 1

1.1. Conceptos fundamentales 1

1.2. Tablas estadísticas 2

1.2.1. Variable cualitativa 3

1.2.2. Variable cuantitativa discreta 4

1.2.3. Variable cuantitativa continua 6

1.3. Representaciones gráficas 8

1.3.1. Variable cualitativa 8

1.3.2. Variable cuantitativa discreta 11

1.3.3. Variable cuantitativa continua 12

1.4. Medidas estadísticas 14

1.4.1. Medidas de posición o de tendencia central 14

1.4.2. Percentiles 19

1.4.3. Medidas de dispersión: varianza y desviación típica 21

Bibliografía 23