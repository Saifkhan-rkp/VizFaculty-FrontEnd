import React from 'react'

function Loader() {
    return (
        <div class="px-4 py-12 h-full">
            <div class="rounded relative">
                <div>
                    <div class="flex justify-center items-center bg-white py-12">
                        <div>
                            <p
                                class="text-indigo-700 font-semibold text-6xl text-center tracking-wide"
                            >
                                L
                            </p>
                        </div>
                        <div
                            class="rounded-full bg-indigo-100 w-[48px] h-[48px] relative flex justify-center items-center animate-spin"
                        >
                            <svg
                                class="absolute"
                                width="48"
                                height="48"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.6 24C1.61178 24 -0.0276419 25.6207 0.269487 27.5866C0.794327 31.0591 2.07738 34.3893 4.04473 37.3337C6.68188 41.2805 10.4302 44.3566 14.8156 46.1731C19.201 47.9896 24.0266 48.4649 28.6822 47.5388C33.3377 46.6128 37.6141 44.327 40.9706 40.9706C44.327 37.6141 46.6128 33.3377 47.5388 28.6822C48.4649 24.0266 47.9896 19.201 46.1731 14.8156C44.3566 10.4302 41.2805 6.68188 37.3337 4.04473C34.3893 2.07738 31.0591 0.794328 27.5866 0.269487C25.6207 -0.0276419 24 1.61178 24 3.6V3.6C24 5.58822 25.6298 7.16143 27.5726 7.58425C29.619 8.02962 31.5746 8.85603 33.3336 10.0313C36.0963 11.8773 38.2496 14.5011 39.5212 17.5709C40.7927 20.6407 41.1254 24.0186 40.4772 27.2775C39.829 30.5364 38.2289 33.5299 35.8794 35.8794C33.5299 38.2289 30.5364 39.829 27.2775 40.4772C24.0186 41.1254 20.6407 40.7927 17.5709 39.5212C14.5011 38.2496 11.8773 36.0963 10.0313 33.3336C8.85603 31.5746 8.02962 29.619 7.58425 27.5726C7.16143 25.6298 5.58822 24 3.6 24V24Z"
                                    fill="#4338CA"
                                />
                            </svg>

                            <div class="rounded-full bg-slate-50 w-[35px] h-[35px]"></div>
                        </div>
                        <div>
                            <p
                                class="text-indigo-700 font-semibold text-6xl text-center tracking-wide"
                            >
                                ADING
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader