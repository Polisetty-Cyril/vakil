export const Footer = () => {
  return (
    <footer className="w-full max-h-[480px] overflow-hidden bg-gray-50/30 border-t border-slate-200">
      <div className="w-3/5 mx-auto h-[480px] flex flex-col items-center border-x border-slate-200 justify-between">
        <div className="h-full w-full pt-20 flex">
          <div className="w-1/3 px-10 flex justify-between mb-auto flex-col gap-4 pr-20">
            <div className="font-inter font-extrabold text-purple-600 text-6xl">
              Vakil
            </div>
            <div className="text-gray-800 text-md leading-relaxed">
              Vakil (वकील): An AI that makes legal documents simple and clear..
            </div>
          </div>
          <div className="w-2/3 flex justify-between">
            <div className="w-1/3 flex flex-col gap-10">
              <div className="text-black font-semibold">Product</div>
              <ul className="flex flex-col gap-3">
                <li className="text-sm">Summarization</li>
                <li className="text-sm">Anomaly Detection</li>
                <li className="text-sm">Strategy suggestion</li>
                <li className="text-sm">Q&A</li>
                <li className="text-sm">Events timeline</li>
                <li className="text-sm">Voice to text</li>
              </ul>
            </div>
            <div className="w-1/3 flex flex-col gap-10">
              <div className="text-black font-semibold">Uses Cases</div>
              <ul className="flex flex-col gap-3">
                <li className="text-sm">Guidance</li>
                <li className="text-sm">Comprehension</li>
                <li className="text-sm">Agreements</li>
                <li className="text-sm">Legalities</li>
              </ul>
            </div>
            <div className="w-1/3 flex flex-col gap-10">
              <div className="text-black font-semibold">Resources</div>
              <ul className="flex flex-col gap-3">
                <li className="text-sm">Pricing</li>
                <li className="text-sm">Privacy</li>
                <li className="text-sm">Contact us</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-gray-400 h-20 w-full px-4 flex justify-center items-center border-t border-slate-200">
          Copyright &copy; 2025 Vakil. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
