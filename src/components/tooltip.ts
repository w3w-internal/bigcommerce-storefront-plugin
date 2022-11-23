const template = document.createElement('template');

template.innerHTML = `
<style>
:host {
  display: inline-block;
  font-wight: 300;
}
.w3w-tooltip {
  position: relative;
  display: inline-block;
}
.w3w-tooltip__icon {
  background-color: #e5e5e5;
  padding: 5px 6.5px;
  border-radius: 100%;
}
.w3w-tooltip:hover .w3w-tooltip__container {
  visibility: visible;
  opacity: 1;
}
.w3w-tooltip__container {
  white-space: normal;
  visibility: hidden;
  position: absolute;
  width: 200px;
  color: #000;
  background-color: #fff;
  text-align: center;
  padding: 5px 0;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.6s;
  bottom: 126%;
  left: 50%;
  margin-left: -108px;
  padding: 8px;
  box-shadow: 0px 4px 6px 0px rgba(50, 50, 93, 0.11),
    0px 1px 3px 0px rgba(0, 0, 0, 0.08);
  z-index: 100;
}
.w3w-tooltip__container::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -8px;
  border-width: 8px;
  border-style: solid;
  border-color: #fff transparent transparent transparent;
}
</style>
<div class="w3w-tooltip">
   <svg
      class="w3w-tooltip__icon"
      viewbox="0 0 9 13"
      width="9"
      height="13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path
         d="M4.69592 0.59375C7.04348 0.59375 8.60141 1.85568 8.60141 3.67617C8.60141 4.87604 8.00385 5.72422 6.83007 6.38622C5.74165 7.00684 5.42153 7.3999 5.42153 8.16533V8.18602C5.42153 8.41358 5.22946 8.59977 4.9947 8.59977H3.65019C3.41543 8.59977 3.22336 8.41358 3.22336 8.18602V8.12396C3.11665 6.86203 3.56483 6.15866 4.69592 5.49666C5.763 4.87604 6.08312 4.48298 6.08312 3.73823C6.08312 2.99349 5.48556 2.45562 4.54653 2.45562C3.71422 2.45562 3.11665 2.91074 2.96726 3.65548C2.92458 3.82098 2.77519 3.94511 2.58312 3.94511H1.11056C0.875801 3.94511 0.705069 3.75892 0.72641 3.53136C0.961167 1.77293 2.34836 0.59375 4.69592 0.59375ZM3.05263 11.165C3.05263 10.4616 3.65019 9.90308 4.39714 9.90308C5.14409 9.90308 5.74165 10.4616 5.74165 11.165C5.74165 11.8684 5.14409 12.4269 4.39714 12.4269C3.65019 12.4062 3.05263 11.8684 3.05263 11.165Z"
         fill="#0A3049"
         ></path>
   </svg>
   <div class="w3w-tooltip__container">
      Is your property hard to find? To help your delivery driver find your
      exact location, please enter your what3words delivery address.<br />
      <a
         href="https://delivery.w3w.co/"
         target="_blank"
         rel="noopener noreferrer"
         >Find yours here</a
         >
   </div>
</div>
`;

class W3wTooltip extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('w3w-tooltip', W3wTooltip);
