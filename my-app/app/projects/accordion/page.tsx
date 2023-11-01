export default function Accordion() {
  return (
    <div>
      <section role="group" className="grid place-items-center p-2">
        <details name="accordion" className="flex">
          <summary className="before:content-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke-width=\'1.5\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M19.5 8.25l-7.5 7.5-7.5-7.5\' /%3E%3C/svg%3E%0A'] before:mask-linear-gradient(90deg, white, white) before:mask-left-1.65rem before:w-[calc(100% - 1rem)] before:top-50% before:-translate-y-35% before:transition-transform-rotate-0.2s before:transform-origin-50-40% hover:after-rotate-[-180deg] relative w-80 cursor-pointer border-b border-black py-4 font-semibold before:right-0 before:h-full before:w-20">
            Exclusive
          </summary>
          <span className="inline-block h-0 w-80 overflow-hidden p-0 pl-4 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            et sed consectetur aperiam repellendus, accusantium, facere id earum
            omnis autem aspernatur perferendis labore ad obcaecati eveniet quasi
            fuga nemo qui.
          </span>
        </details>
        <details name="accordion" className="flex">
          <summary className="before:content-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke-width=\'1.5\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M19.5 8.25l-7.5 7.5-7.5-7.5\' /%3E%3C/svg%3E%0A'] before:mask-linear-gradient(90deg, white, white) before:mask-left-1.65rem before:w-[calc(100% - 1rem)] before:top-50% before:-translate-y-35% before:transition-transform-rotate-0.2s before:transform-origin-50-40% hover:after-rotate-[-180deg] relative w-80 cursor-pointer border-b border-black py-4 font-semibold before:right-0 before:h-full before:w-20">
            Accordion
          </summary>
          <span className="inline-block h-0 w-80 overflow-hidden p-0 pl-4 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            et sed consectetur aperiam repellendus, accusantium, facere id earum
            omnis autem aspernatur perferendis labore ad obcaecati eveniet quasi
            fuga nemo qui.
          </span>
        </details>
        <details name="accordion" className="flex">
          <summary className="before:content-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke-width=\'1.5\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M19.5 8.25l-7.5 7.5-7.5-7.5\' /%3E%3C/svg%3E%0A'] before:mask-linear-gradient(90deg, white, white) before:mask-left-1.65rem before:w-[calc(100% - 1rem)] before:top-50% before:-translate-y-35% before:transition-transform-rotate-0.2s before:transform-origin-50-40% hover:after-rotate-[-180deg] relative w-80 cursor-pointer border-b border-black py-4 font-semibold before:right-0 before:h-full before:w-20">
            Pattern
          </summary>
          <span className="inline-block h-0 w-80 overflow-hidden p-0 pl-4 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            et sed consectetur aperiam repellendus, accusantium, facere id earum
            omnis autem aspernatur perferendis labore ad obcaecati eveniet quasi
            fuga nemo qui.
          </span>
        </details>
      </section>
    </div>
  );
}
