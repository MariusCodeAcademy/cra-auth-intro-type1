# CRA starter

## 1 RegisterForm.js

1. pakeisti console.log i klaidas rodomas prie ivesties lauku
2. iskelti fetch i atskira funkica utils dalyje

## 2 LoginForm.js

1. Atvaizduoti validacijos klaidas is back end prie inputu
2. Atvaizduoti validacijos klaidas is front end prie inputu
3. Sekmingo prisijungimo atveju redirectinti i Profilio puslapi
4. Prideti Auth context ir issaugoti varotojo duomenis auth contexte (Auth contextas issaugo duomenis localstorage o ne LoginForm.js)
5.

## 3 ProfilePage.js

1. Atvaizduoti Email prie pagr antrastes
2. Atvaizduoti Vartotojo postu antrastes ir kiek postu turi vartotojas(suskaiciuoti fronte)
3. Jei vartotojas neturi postu pranesti apie tai atskirame heading elemente arba komponente

## 4 AddNewArticlePage.js

1. Sukuriam puslapi
2. Jis prieinamas tik jei vartotojas yra prisijunges
3. jei neprisijunges bet iveda adresa tai redirektinam ir login page
4. Sukuriam forma su input title ir body text area
5. forma supildzius rankiniu budu pridedam userId ir patalpinam nauja posta siusdami POST i
   http://localhost:5000/posts/new
