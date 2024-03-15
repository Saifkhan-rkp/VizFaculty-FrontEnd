import React from "react";


export default function BlogCards(params) {
  return (<>
    {/* <!-- ====== Cards Section Start --> */}
    <section class="bg-slate-200 pt-6 pb-6 lg:pt-[120px] lg:pb-20   shadow-md shadow-inner" >
      <h1 className="align-middle justify-center text-center text-5xl  p-6 font-medium" data-aos="zoom-out">Blogs</h1>
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap p-4">
          <div class="w-full px-4 md:w-1/2 xl:w-1/3 " data-aos="zoom-in-right" data-aos-duration="1000">
            <div class="mb-10 overflow-hidden rounded-lg bg-slate-50 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] " >
              <img
                src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg"
                alt="image"
                class="w-full"
              />
              <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9 ">
                <h3>
                  <a
                    href="javascript:void(0)"
                    class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                  >
                    Streamlining Your Institution's Payroll Process with VizFaculty
                  </a>
                </h3>
                <p class="text-body-color mb-7 text-base leading-relaxed">
                  Learn how VizFaculty can make managing the salaries of visiting faculty members simpler and more efficient.
                </p>
                <a
                  href="javascript:void(0)"
                  class="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white hover:bg-slate-800"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 xl:w-1/3 " data-aos="zoom-in-up" data-aos-duration="1000">
            <div class="mb-10 overflow-hidden rounded-lg bg-white hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <img
                src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-02.jpg"
                alt="image"
                class="w-full"
              />
              <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                  <a
                    href="javascript:void(0)"
                    class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                  >
                    The Benefits of Automation for Educational Institutions
                  </a>
                </h3>
                <p class="text-body-color mb-7 text-base leading-relaxed">
                  Explore the advantages of using automated systems like VizFaculty for streamlining administrative tasks.
                </p>
                <a
                  href="javascript:void(0)"
                  class="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white hover:bg-slate-800"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 xl:w-1/3 " data-aos="zoom-in-left" data-aos-duration="1000">
            <div class="mb-10 overflow-hidden rounded-lg bg-white hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <img
                src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-03.jpg"
                alt="image"
                class="w-full"
              />
              <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                  <a
                    href="javascript:void(0)"
                    class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                  >
                    The Importance of Accurate Record-Keeping in Education
                  </a>
                </h3>
                <p class="text-body-color mb-7 text-base leading-relaxed">
                  Highlight the significance of maintaining accurate attendance and payment records for visiting faculty members and how VizFaculty can help.
                </p>
                <a
                  href="javascript:void(0)"
                  class="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white hover:bg-slate-800"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- ====== Cards Section End --> */}




  </>)
}