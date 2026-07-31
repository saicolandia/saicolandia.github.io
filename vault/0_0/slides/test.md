# ¡Diapositivas!

Texto
# Título

---

# Diapositiva horizontal

--

# Diapositiva vertical

---


text with border <!-- element class="with-border" -->

text with background <!-- element style="background:blue" -->

text with attribute <!-- element data-toggle="modal" -->

---

<!-- .slide: style="background-color: coral;" -->

# Header with coral background color

Paragraph has coral background color, too!

---

<!-- .slide: style="background-color: blue;" -->

- All Bullet points
- have green
- background color
---

::: block

#### Header
_and_
Paragraph content
*in same block*

:::

---

no color

::: block <!-- element style="background-color: red;" -->

everything inside this block has red background color

::: block <!-- element style="background-color: blue;" -->

blue <!-- element class="fragment" -->

:::

red <!-- element class="fragment fade-out" -->

:::

no color
----

Fade in 
Fade out 

Highlight red <!-- element class="fragment highlight-red" -->

Fade in, then out <!-- element class="fragment fade-in-then-out" -->

Slide up while fading in <!-- element class="fragment fade-up" -->

---

- Permanent item
- Appear Fourth <!-- element class="fragment" data-fragment-index="4" -->
- Appear Third <!-- element class="fragment" data-fragment-index="3" -->
- Appear Second <!-- element class="fragment" data-fragment-index="2" -->
- Appear First <!-- element class="fragment" data-fragment-index="1" -->

---

<!-- slide bg="aquamarine" -->
## Slide with text based background

<style>
	.with-border{
		border: 1px solid red;
	}
</style>

styled text <!-- element class="with-border" -->
--

<!-- slide bg="#ff0000" -->
## Slide with hex based background

--

<!-- slide bg="rgb(70, 70, 255)" -->
## Slide with rgb based background

--

<!-- slide bg="hsla(315, 100%, 50%, 1)" -->
## Slide with hsl based background

### Ordered list

1. First
2. Second
3. Third


### Fragmented ordered list

1. Permanent
2) Second
3) Third
4) Fourth
---

# Slide without background

## Unordered list

- First
- Second
- Third

## Fragmented unordered list

- Permanent
+ First
+ Second
+ Third

---

<!-- slide bg="https://picsum.photos/seed/picsum/800/600" -->
## Slide with image background

---

<!-- slide bg="[[image.jpg]]" -->
## Slide with image back #2


---

<!-- slide bg="https://picsum.photos/seed/picsum/800/600" data-background-opacity="0.5" -->
## with opacity

0.5 ≙ 50% opacity

## More options:

See [reveal backgrounds](https://revealjs.com/backgrounds/)

---
# Uno dos tres 
Uno dos tres cuatro cinco seis siete ocho nueve diez 
Uno dos tres cuatro cinco seis siete ocho nueve diez 
Uno dos tres cuatro cinco seis siete ocho nueve diez 
Uno dos tres cuatro cinco seis siete ocho nueve diez 
Uno dos tres cuatro cinco seis siete ocho nueve diez 
Uno dos tres cuatro cinco seis siete ocho nueve diez 


---

#### Excalidraw support

![[Sample.excalidraw|100]]

![[Sample.excalidraw]] <!-- element style="width:300px; height:400px" -->

---

<!-- .slide: bg="white"-->

![](fab fa-font-awesome fa-4x)

## Icons

---

<!-- .slide: bg="white"-->
### Basic Syntax

![](fas fa-envelope fa-4x)<!-- .element: color="coral"-->

Short Syntax

	![](fas fa-envelope fa-4x)<!-- .element: color="coral"-->

HTML Synthax

 	<i color="coral" class="fas fa-envelope fa-4x"/>

ShortCode Synthax

	:fas_envelope:
 
---

# Sizing

<i class="fas fa-camera fa-xs"></i>
<i class="fas fa-camera fa-sm"></i>
<i class="fas fa-camera fa-lg"></i>
<i class="fas fa-camera fa-2x"></i>
<i class="fas fa-camera fa-3x"></i>
<i class="fas fa-camera fa-5x"></i>
<i class="fas fa-camera fa-7x"></i>

---

# Rotating Icons

<i class="fas fa-snowboarding"></i>
<i class="fas fa-snowboarding fa-rotate-90"></i>
<i class="fas fa-snowboarding fa-rotate-180"></i>
<i class="fas fa-snowboarding fa-rotate-270"></i>
<i class="fas fa-snowboarding fa-flip-horizontal"></i>
<i class="fas fa-snowboarding fa-flip-vertical"></i>
<i class="fas fa-snowboarding fa-flip-both"></i>
  
---
  
  # Animating Icons
  
<i class="fas fa-spinner fa-spin fa-3x"></i>
<i class="fas fa-circle-notch fa-spin fa-3x"></i>
<i class="fas fa-sync fa-spin fa-3x"></i>
<i class="fas fa-cog fa-spin fa-3x"></i>
<i class="fas fa-spinner fa-pulse fa-3x"></i>
<i class="fas fa-stroopwafel fa-spin fa-3x"></i>
  
  
---

#### Bordered + Pulled Icons

<i class="fas fa-quote-left fa-2x fa-pull-left"></i>

Gatsby believed in the green light, the orgastic future that year by year recedes before us.
It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further...
And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.<!-- .element: style="font-size: 24px" align="justify" -->

<br>

<i class="fas fa-arrow-right fa-2x fa-pull-right fa-border"></i>

Gatsby believed in the green light, the orgastic future that year by year recedes before us.
It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further...
And one fine morning — So we beat on.<!-- .element: style="font-size: 46px" align="justify" -->

---


:smile: => 😄

---

```chart
    type: bar
    labels: [Monday,Tuesday,Wednesday,Thursday,Friday, Saturday, Sunday, "next Week", "next Month"]
    series:
      - title: Title 1
        data: [1,2,3,4,5,6,7,8,9]
      - title: Title 2
        data: [5,4,3,2,1,0,-1,-2,-3]
```

<canvas data-chart="line" >
<!--
{
 "data": {
  "labels": ["January"," February"," March"," April"," May"," June"," July"],
  "datasets":[
   {
    "data":[65,59,80,81,56,55,40],
    "label":"My first dataset","backgroundColor":"rgba(20,220,220,.8)"
   },
   {
    "data":[28,48,40,19,86,27,90],
    "label":"My second dataset","backgroundColor":"rgba(220,120,120,.8)"
   }
  ]
 }
}
-->
</canvas>

---

<!-- .slide: data-auto-animate -->
# Title

---
<!-- .slide: data-auto-animate -->

# Title
##### **Subtitle**
###### *Author - 2022* 
