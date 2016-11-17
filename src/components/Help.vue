<template>

  <h2 class="text-huge">Pomoc</h2>

  <h3 class="text-big">FAQ (Często zadawane pytania)</h3>
  <p>
    <a href="https://lvlup.pro/pomoc/" target="_blank">lvlup.pro/pomoc</a>
    <br> To pierwszy punkt pomocy, warto tu zajrzeć :)
  </p>

  <h3 class="text-big">Forum</h3>
  <p>
    <a href="https://forum.lvlup.pro/" target="_blank">forum.lvlup.pro</a>
    <br> Jeśli w FAQ nie ma odpowiedzi na twoje pytanie warto poszukać poradnika lub utworzyć wątek
    <br> Poradniki stworzone przez administrację lvlup.pro oraz społeczność to rozwiązanie większości problemów
  </p>
  <h3 class="text-big">Zgłoszenie (ticket)</h3>
  <p>
    Jeśli twoja sprawa nie została poruszona w FAQ ani na forum lub dotyczy tylko i wyłącznie twojej usługi np. kwestia płatności czy awarii to utwórz zgłoszenie formularzem poniżej
  </p>
  <div class="row">
    <div class="col-xs-12 col-md-6">
      <ui-select label="Usługa" 
        :options="['Hosting WWW ID 111','Serwer VPS ID 2','Inne']" 
        placeholder="Wybierz usługę"></ui-select>
    </div>
    <div class="col-xs-12 col-md-6">
      <ui-select label="Twój poziom znajomości tematu" 
        :options="['Jestem nowy, zróbcie to za mnie','Wiem o co chodzi, chcę się doradzić','Prawdopodobnie wiem więcej od was']" 
        default="Jestem nowy, zróbcie to za mnie"></ui-select>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-md-6">
      <ui-textbox name="name" label="Temat - po tym obsługa będzie kojarzyć twoją sprawę" 
        type="text" placeholder="Np. Zmiana pakietu, serwer testowy"></ui-textbox>
    </div>
    <div class="col-xs-12 col-md-6">
      <ui-select label="Priorytet i czas odpowiedzi" 
        :options="['Bardzo niski - odpowiedź w 72h (mało istotne sprawy)','Niski - odpowiedź w 48h (generalne pytania)','Normalny - odpowiedź w 24h (standardowe sprawy)','Wysoki - odpowiedź w 12h - opłata 5 PLN','ASAP - tak szybko jak możliwe - opłata 20 PLN']" 
        default="Bardzo niski - odpowiedź w 72h (mało istotne sprawy)"></ui-select>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
     <ui-textbox 
       name="message" label="Wiadomość - pamiętaj że jeśli będziesz miły dla administracji to administracja będzie też miła dla Ciebie :)" 
       :multi-line="true" placeholder="Tu zostaw wiadomość..."></ui-textbox>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <ui-button color="success">Utwórz ticket</ui-button>
    </div>
  </div>
  <br>
</template>
