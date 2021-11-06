ITCC

0 - Settings: variáveis e configurações globais
        Entram os estilos globais por exemplo
        - $environment: dev;
        - $rem-base: 16px !default
        - $main-color: #c00fee;
        - $module-size: rem-calc(20)

1 - Tools: funções e mixins

2 - Genérico: estilos genéricos como resets e normalizes
            - Define-se o box-sizing
            - Normalize

3 - Elementos: estilização de elemntos HTML

4 - Objetos: Padrões não cosméticos, agnosticamente nomeados 
            - Grids
            - Containers

5 - Componentes: peças de UI isoladas (menu dropdow, carousel, button)
            - Elementos de UI: menus, carousels, slider

6 - Trumps: utilitarios, helpers, sobrescritas e hacks


* Não usa IDS
* Criação modular de componentes em vez de páginas
* Uso e abuso de classes

* Começa-se pelos estilos mais gerais e genéricos, a partir daí acrecenta-se as camadas de estílos específicos
* Regras com especificidade menor para alta especificidade



BEM - Padrão de Nomenclatura

Nome do Bloco + 2 underlines + nome do Elemento: .[Bloco]__[Elemento].

 @<breakpoint>, and tell us this class when at this size:
 The most common types of namespace are c-, for Components, o-, for Objects, u-, for Utilities, and is-/has- for States 

 /**
 * Outline all classes.
 */
[class] {
  outline: 5px solid lightgrey;
}

/**
 * Outline all BEM Elements.
 */
[class*="__"] {
  outline: 5px solid grey;
}

/**
 * Outline all BEM Modifiers.
 */
[class*="--"] {
  outline: 5px solid darkgrey;
}

/**
 * Outline all Object classes.
 */
[class^="o-"],
[class*=" o-"] {
  outline: 5px solid orange;
}

/**
 * Outline all Component classes.
 */
[class^="c-"],
[class*=" c-"] {
  outline: 5px solid cyan;
}

/**
 * Outline all Responsive classes.
 */
[class*="@"] {
  outline: 5px solid rosybrown;
}

/**
 * Outline all Hack classes.
 */
[class^="_"] {
  outline: 5px solid red;
}


When I’m building a new object, the first thing I do is to figure out which parts are reusable components, and define what I know and do not know about them.

what do we know?
Can be nested
Optional right button
Must clearfix

It is equally important to define what is flexible, or unknown, about a new object.

Image width, margins, and decoration vary
Right content is unknown
Width unknown