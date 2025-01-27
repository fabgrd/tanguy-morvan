"use client"
import Image from "next/image";

export default function Profile() {
  return (
    <div className="min-h-screen bg-red-600 text-white p-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Tanguy Morvan</h1>
          <div className="space-y-1">
            <p>@tanguy.morvan</p>
            <p>+33 6 67 65 14 16</p>
            <p>tanguy@area-ofwork</p>
          </div>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">About</h2>
          <p>
            Tanguy Morvan (2000) is a designer based between Paris and Geneva,
            graduated from ECAL in 2024. His work delves into the diverse realms
            of photography and image creation, carefully bridging the gap
            between commercial projects and artistic expression. Beyond his
            personal practice, Tanguy co-runs a design office{" "}
            <strong>agencetotale</strong> with his collaborator Antoine Pasi,
            where their expertise converges across typography, graphic design,
            CGI, and photography.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Work Situation</h2>
          <ul className="list-disc pl-6">
            <li>Area of Work, Paris — Designer</li>
            <li>
              ECAL, École Cantonale d'Art de Lausanne — MA Teaching Assistant
            </li>
            <li>Geneva — Freelance Graphic Designer and Image Maker</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Clients</h2>
          <ul className="list-disc pl-6">
            <li>Louis Vuitton, Chanel, BEST REGARDS Agency, YellowKorner</li>
            <li>
              GIA Kuan CONSULTING, Eli Rosselson, INSOLITE MAGAZINE, EPFL
            </li>
            <li>CMi (Center of MicroNanoTechnology), LVMH, CACTUS DIGITAL</li>
            <li>ETML (Ecole des Métiers de Lausanne)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Others</h2>
          <ul className="list-disc pl-6">
            <li>Exhibition at DIPLOMA Exhibition ECAL - Lausanne 2024</li>
            <li>Lecture on DeepFakes, AI and CGI at ETML - Lausanne 2024</li>
            <li>
              Lecture at Junior Design Research Conference - Geneva 2024
            </li>
            <li>
              Workshop at Junior Design Research Conference - Geneva 2024
            </li>
            <li>
              Group exhibition "Frontière de Sabiha" SACBA - Chiasso 2024
            </li>
            <li>
              "Optometric Vision Therapy" published for OFFPRINT - Paris 2023
            </li>
            <li>Lecture at Ledger - Paris 2021</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
