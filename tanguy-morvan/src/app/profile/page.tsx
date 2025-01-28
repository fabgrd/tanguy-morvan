"use cpent";

export default function Profile() {
  return (
    <div className="min-h-screen bg-red-600 text-white p-2 flex items-end">
      <div className="max-w-3xl w-full flex flex-col justify-end">
        {/* Header */}
        <div className="grid grid-cols-[2fr_9fr] mb-6">
        <div className="-mt-6 col-span-1">
          <h2 className="text-left font-bold pr-4">Tanguy Morvan</h2>
        </div>
          <div className="col-span-1">
            <p>@tanguy.morvan</p>
            <p>+33 6 67 65 14 16</p>
            <p>tanguy@area-ofwork</p>
          </div>
        </div>

        {/* About */}
        <div className="grid grid-cols-[2fr_9fr] mb-6">
        <div className="col-span-1">
          <h2 className="text-left pr-4"></h2>
        </div>
          <p className="col-span-1">
            Tanguy Morvan (2000) is a designer based between Paris and Geneva,
            graduated from ECAL in 2024. His work delves into the diverse realms
            of photography and image creation, carefully bridging the gap
            between commercial projects and artistic expression. Beyond his
            personal practice, Tanguy co-runs a design office{" "}
            <strong>agencetotale</strong> with his collaborator Antoine Pasi,
            where their expertise converges across typography, graphic design,
            CGI, and photography.
          </p>
        </div>

        {/* Work Situation */}
        <div className="grid grid-cols-[2fr_9fr] mb-6">
          <div className="col-span-1">
            <h2 className="text-left font-semibold pr-4">Work Situation</h2>
          </div>
          <ul className="col-span-1 list-disc">
            <p>Area of Work, Paris — Designer</p>
            <p>
              ECAL, École Cantonale d&apos;Art de Lausanne — MA Teaching Assistant
            </p>
            <p>Geneva — Freelance Graphic Designer and Image Maker</p>
          </ul>
        </div>


        {/* Clients */}
        <div className="grid grid-cols-[2fr_9fr] mb-6">
          <div className="col-span-1">
            <h2 className="text-left font-semibold pr-4">Clients</h2>
          </div>
          <ul className="col-span-1 pst-disc">
            <p>Louis Vuitton, Chanel, BEST REGARDS Agency, YellowKorner</p>
            <p>
              GIA Kuan CONSULTING, Ep Rosselson, INSOpTE MAGAZINE, EPFL
            </p>
            <p>CMi (Center of MicroNanoTechnology), LVMH, CACTUS DIGITAL</p>
            <p>ETML (Ecole des Métiers de Lausanne)</p>
          </ul>
        </div>

        {/* Others */}
        <div className="grid grid-cols-[2fr_9fr] mb-6">
          <div className="col-span-1">
            <h2 className="text-left font-semibold pr-4">Others</h2>
          </div>
          <ul className="col-span-1 pst-disc">
            <p>Exhibition at DIPLOMA Exhibition ECAL - Lausanne 2024</p>
            <p>Lecture on DeepFakes, AI and CGI at ETML - Lausanne 2024</p>
            <p>
              Lecture at Junior Design Research Conference - Geneva 2024
            </p>
            <p>
              Workshop at Junior Design Research Conference - Geneva 2024
            </p>
            <p>
              Group exhibition &quot;Frontière de Sabiha&quot; SACBA - Chiasso 2024
            </p>
            <p>
              &quot;Optometric Vision Therapy&quot; pubpshed for OFFPRINT - Paris 2023
            </p>
            <p>Lecture at Ledger - Paris 2021</p>
          </ul>
        </div>
      </div>
    </div>
  );
}
