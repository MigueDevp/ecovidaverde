import Navbar from "../components/navbar";
import { routes } from "../controller/routes";
import Footer from "../components/footer";
import Wallpaper from "../components/wallpaper";
import DownWallpaper from "../components/downwallpaper";
import FadeInSection from "../components/scrolldown";
import cuidadoAguaImage from "@/app/images/wateer.png";
import monitoreoImage from "@/app/images/monitorear.jpg";
import uiReferenceImage from "@/app/images/ui.png";
import proyectov1 from "@/app/images/jardinv1.jpg";
import proyectov2 from "@/app/images/jardinv2.jpg";
import proyectov3 from "@/app/images/jardinv3.jpg";
import Image from "next/image";

export default function AcercaPage() {
  return (
    <div>
      <div className="flex justify-items-center mx-32 mb-60 pb-72">
        <Navbar routes={routes} />
        <Wallpaper />

        <div className="h-screen w-screen flex flex-col mb-72 mt-20">
          <div className="text-pretty p-10  mx-40 ">
            <h1 className="text-6xl text-center font-bold tracking-tight text-gray-900 mb-12">
              Acerca de nosotros
            </h1>
            <p className="mb-2">
              En <strong>EcoVidaVerde</strong> creemos que el futuro de la
              agricultura radica en la armonía entre la tecnología y el medio
              ambiente. Nuestra visión es crear un mundo donde la tecnología IoT
              no solo mejore la eficiencia de la agricultura sino que también
              proteja y preserve la biodiversidad de nuestro planeta.
            </p>

            <p className="mb-2">
              Nuestra plataforma es una ventana al corazón de tu jardín,
              ofreciéndote una visión detallada y en tiempo real de las
              condiciones vitales de tus plantas.
            </p>

            <p className=" mb-2">
              En EcoVidaVerde, no solo cultivas plantas, sino que también
              cultivas un futuro sostenible. Nuestro compromiso es con la
              educación y la conciencia ambiental, proporcionando a los usuarios
              las herramientas y el conocimiento para transformar sus espacios
              verdes en ecosistemas autosostenibles. Únete a nosotros en esta
              revolución verde, donde cada planta cuenta y cada usuario es un
              agente de cambio hacia un mundo más verde y tecnológicamente
              integrado.
            </p>
          </div>

          <div className="shadow-xl mb-10 p-12  rounded-xl hover:scale-105 transition-transform duration-200">
            <h2 className="text-3xl font-bold mb-4">
              <strong>Misión</strong>
            </h2>
            <p className="mb-2">
              Nos dedicamos a la optimización del uso de recursos naturales,
              implementando un sistema de riego automatizado de vanguardia.
              Utilizamos sensores IoT para monitorear en tiempo real el
              bienestar de las plantas, garantizando un manejo eficiente del
              agua y promoviendo un futuro más verde y sustentable.
            </p>
          </div>

          <div className="shadow-xl mb-10 p-10 rounded-xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-4">
              <strong>Visión</strong>
            </h2>
            <p className="mb-2">
              Aspiramos a ser pioneros en la implementación de soluciones
              tecnológicas avanzadas en el sector agrícola. Nuestro objetivo es
              expandir nuestro impacto más allá de las fronteras, contribuyendo
              al desarrollo de comunidades autosuficientes y en armonía con el
              medio ambiente.
            </p>
          </div>

          <div className="shadow-xl mb-10 rounded-xl p-10 hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-4">
              <strong>Objetivos</strong>
            </h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>Automatización Avanzada:</strong> Implementar algoritmos
                de aprendizaje automático para predecir las necesidades hídricas
                de las plantas y ajustar el riego automáticamente.
              </li>
              <li>
                <strong>Integración de Datos:</strong> Asegurar que la
                plataforma pueda integrarse con otras bases de datos o sistemas
                para ampliar su funcionalidad.
              </li>
              <li>
                <strong>Seguridad de Datos:</strong> Implementar medidas de
                seguridad robustas para proteger la información recopilada por
                los sensores IoT.
              </li>
              <li>
                <strong>Soporte Técnico:</strong> Ofrecer soporte técnico para
                resolver cualquier problema que surja con el sistema de
                monitoreo.
              </li>
            </ul>
          </div>

          <div className="shadow-xl mb-10  p-10 rounded-xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-4">
              <strong>Equipo de desarrollo </strong>
            </h2>

            <ul className="list-disc">
              <li>Miguel Angel Ramírez Ramírez</li>
              <li>Giovani Alberto Villagran Valdes</li>
              <li>Angel Guillermo Vanegas Bernal</li>
              <li>Marco Antonio Nieto Arellano</li>
              <li>Carlos Bocanegra Trejo</li>
            </ul>
          </div>
        </div>
        <DownWallpaper />
      </div>

      <div className="justify-items-center mx-32 mt-72 mb-96 pb-20 px-12 ">
        <div className="text-pretty items-center">
          <FadeInSection>
            <div>
              <h1 className="text-6xl text-center font-bold tracking-tight text-gray-900 mb-12">
                Problemática
              </h1>

              <p className="mb-2">
                La problemática que enfrentamos en la actualidad es
                multifacética y urgente. Vivimos en una era donde los desafíos
                ambientales como el cambio climático, la degradación del suelo y
                la pérdida de biodiversidad amenazan no solo la salud de nuestro
                planeta, sino también la seguridad alimentaria y la calidad de
                vida de las generaciones futuras.
              </p>

              <p className="mb-2">
                En <strong>EcoVidaVerde</strong> reconocemos que la agricultura
                convencional ha contribuido significativamente a estos
                problemas. El uso excesivo de químicos, la gestión inadecuada
                del agua y la dependencia de prácticas insostenibles han llevado
                a un ciclo destructivo de explotación de recursos naturales.
                Esto no solo pone en peligro la integridad ecológica, sino que
                también socava la capacidad de la tierra para sostener la vida.
              </p>

              <p className="mb-2">
                Nuestro proyecto surge como una respuesta a esta crisis.
                Buscamos transformar la manera en que interactuamos con la
                tierra, promoviendo un enfoque de agricultura que sea
                sostenible, eficiente y respetuoso con el medio ambiente. A
                través de la integración de tecnologías IoT, proporcionamos
                soluciones que permiten un monitoreo preciso y una gestión
                inteligente de los recursos, lo que resulta en una menor huella
                ecológica y un mayor rendimiento de las cosechas.
              </p>

              <p className="mb-2">
                La problemática que abordamos es compleja, pero no insuperable.
                Con la adopción de tecnologías avanzadas y prácticas
                sostenibles, podemos revertir el daño y abrir el camino hacia un
                futuro más verde y próspero. En <strong>EcoVidaVerde</strong>,
                estamos comprometidos a ser parte de la solución, empoderando a
                agricultores y entusiastas del jardín por igual para que se
                conviertan en guardianes de nuestro precioso planeta.
              </p>
            </div>
          </FadeInSection>

          <div className="mt-32">
            <FadeInSection>
              <div>
                <h1 className="text-6xl text-center font-bold tracking-tight text-gray-900 mb-12">
                  Alcance
                </h1>

                <p className="mb-2">
                  El alcance de EcoVidaVerde es ambicioso y global. Nuestro
                  objetivo es revolucionar la agricultura sostenible a través de
                  la tecnología IoT, proporcionando una plataforma que no solo
                  beneficie a los agricultores profesionales sino también a los
                  entusiastas de la jardinería en casa y a las comunidades
                  educativas.
                </p>

                <p className="mb-2">
                  Nuestro sistema de monitoreo en tiempo real está diseñado para
                  ser intuitivo y accesible, permitiendo a los usuarios de todo
                  el mundo comprender y responder a las necesidades de sus
                  plantas con precisión científica. Desde pequeños huertos
                  urbanos hasta grandes explotaciones agrícolas, EcoVidaVerde
                  tiene la capacidad de escalar y adaptarse a cualquier tamaño o
                  tipo de proyecto.
                </p>
              </div>
            </FadeInSection>
          </div>

          <div className="mt-32">
            <FadeInSection>
              <div>
                <h1 className="text-6xl text-center font-bold tracking-tight text-gray-900 mb-12">
                  Metodología
                </h1>

                <p className="mb-2">
                  En EcoVidaVerde, utilizamos la metodología Scrum para
                  gestionar el desarrollo de nuestro proyecto de forma ágil y
                  eficiente. Scrum es un marco de trabajo que promueve la
                  colaboración en equipo, la adaptabilidad ante cambios y la
                  entrega continua de valor. Se basa en ciclos de desarrollo
                  conocidos como Sprints, que son períodos cortos y consistentes
                  donde se planifica, se construye y se revisa una parte del
                  producto. Cada Sprint comienza con una reunión de
                  planificación para determinar las tareas a realizar y termina
                  con una revisión para evaluar el progreso y una retrospectiva
                  para mejorar el proceso. Este enfoque iterativo y incremental
                  permite a nuestro equipo responder rápidamente a los cambios y
                  centrarse en la entrega de soluciones efectivas y de alta
                  calidad para la agricultura sostenible y el cuidado de las
                  plantas.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="mb-52">
                <h1 className="text-6xl text-center font-bold tracking-tight text-gray-900 mb-12 mt-20">
                  Resultados
                </h1>

                <p className="mb-2">
                  La implementación de EcoVidaVerde está diseñada para
                  transformar la experiencia de jardinería, ofreciendo una
                  solución integral que no solo mejora la gestión del riego sino
                  que también promueve un enfoque sostenible y consciente del
                  cuidado de las plantas. Los resultados esperados de este
                  proyecto son múltiples y variados, destacando los siguientes
                  aspectos:
                </p>
                <span id="descubreMas"></span>
                <div className="mt-12">
                  <ul className="list-decimal ml-7 mt-6">
                    <li className="mb-4">
                      <strong>Eficiencia Hídrica Mejorada</strong>
                    </li>
                    <p>
                      Se prevé una optimización significativa en el uso del
                      agua, logrando una reducción en el consumo que podría
                      superar el 25%. Esto se traduce en un ahorro considerable
                      de recursos y en una contribución directa a la
                      sostenibilidad ambiental.
                    </p>
                    <div className="flex items-center justify-center my-7">
                      <Image
                        src={cuidadoAguaImage}
                        alt="cuidado image"
                        width={350}
                        height={350}
                      ></Image>
                    </div>
                    <FadeInSection>
                      <div>
                        <li className="list-decimal mt-6">
                          <strong>Monitoreo y Control Avanzados</strong>
                        </li>
                        <p>
                          La capacidad de monitorear parámetros críticos como la
                          humedad y la temperatura en tiempo real permitirá a
                          los usuarios ajustar y controlar el entorno de sus
                          plantas con una precisión sin precedentes.
                        </p>
                      </div>
                    </FadeInSection>

                    <div className="flex items-center justify-center my-7">
                      <Image
                        src={monitoreoImage}
                        alt="moniitoreo"
                        width={450}
                        height={450}
                      ></Image>
                    </div>
                    <FadeInSection>
                      <div>
                        <li className="list-decimal mt-6">
                          <strong>Interacción y Conectividad Mejoradas:</strong>
                        </li>
                        <p>
                          A través de la interfaz de usuario intuitiva y las
                          capacidades de IoT, los usuarios podrán interactuar
                          con su jardín de maneras innovadoras, aprovechando la
                          tecnología para una experiencia más rica y conectada.
                        </p>
                        <div className="flex items-center justify-center my-7">
                          <Image
                            src={uiReferenceImage}
                            alt="uiReference"
                            width={450}
                            height={450}
                          ></Image>
                        </div>
                      </div>
                    </FadeInSection>
                  </ul>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection>
              <FadeInSection>
                <div>
                  <div className="mt-22">
                    <h1 className="text-6xl text-center font-bold tracking-tight text-gray-900 mb-12">
                      Fotos del proyecto
                    </h1>
                    <div className="grid grid-cols-3 gap-4 mx-20 my-9 mt-12">
                      <div className="hover:hover:scale-110 transition-transform duration-300 p-6">
                        <Image
                          src={proyectov1}
                          alt="version1"
                          width={300}
                          height={300}
                        ></Image>
                      </div>
                      <div className="hover:hover:scale-110 transition-transform duration-300 p-6">
                        <Image
                          src={proyectov2}
                          alt="version2"
                          width={300}
                          height={300}
                        ></Image>
                      </div>
                      <div className="hover:hover:scale-110 transition-transform duration-300 p-6">
                        <Image
                          src={proyectov3}
                          alt="version1"
                          width={300}
                          height={300}
                        ></Image>
                      </div>
                      <div className="hover:hover:scale-110 transition-transform duration-300 p-6">
                        <Image
                          src={proyectov1}
                          alt="version1"
                          width={300}
                          height={300}
                        ></Image>
                      </div>
                      <div className="hover:hover:scale-110 transition-transform duration-300 p-6">
                        <Image
                          src={proyectov1}
                          alt="version1"
                          width={300}
                          height={300}
                        ></Image>
                      </div>
                      <div className="hover:hover:scale-110 transition-transform duration-300 p-6">
                        <Image
                          src={proyectov1}
                          alt="version1"
                          width={300}
                          height={300}
                        ></Image>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </FadeInSection>
          </div>
        </div>
      </div>

      <div className="mt-30">
        <Footer></Footer>
      </div>
    </div>
  );
}
