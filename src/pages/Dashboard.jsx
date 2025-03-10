"use client"

import { useState } from "react"
import IntegrationCard from "../components/IntegrationCard"
import Sidebar from "../components/Sidebar"

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-md bg-white shadow-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="#1A1A1A" />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col w-full">
        {/* Header */}
        <header className="h-16 flex items-center justify-end px-6">
          <div className="flex items-center space-x-4">
            <button className="p-2 w-8 h-8 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 17C0.716667 17 0.479167 16.9042 0.2875 16.7125C0.0958333 16.5208 0 16.2833 0 16C0 15.7167 0.0958333 15.4792 0.2875 15.2875C0.479167 15.0958 0.716667 15 1 15H2V8C2 6.61667 2.41667 5.3875 3.25 4.3125C4.08333 3.2375 5.16667 2.53333 6.5 2.2V1.5C6.5 1.08333 6.64583 0.729167 6.9375 0.4375C7.22917 0.145833 7.58333 0 8 0C8.41667 0 8.77083 0.145833 9.0625 0.4375C9.35417 0.729167 9.5 1.08333 9.5 1.5V2.2C10.8333 2.53333 11.9167 3.2375 12.75 4.3125C13.5833 5.3875 14 6.61667 14 8V15H15C15.2833 15 15.5208 15.0958 15.7125 15.2875C15.9042 15.4792 16 15.7167 16 16C16 16.2833 15.9042 16.5208 15.7125 16.7125C15.5208 16.9042 15.2833 17 15 17H1ZM8 20C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18H10C10 18.55 9.80417 19.0208 9.4125 19.4125C9.02083 19.8042 8.55 20 8 20Z"
                  fill="#006FB9"
                />
              </svg>
            </button>

            <div className="w-8 h-8 rounded-full bg-[#006FB9] text-white flex items-center justify-center text-sm font-medium">
              E
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-hidden">
          <div className="flex justify-between items-center px-6 py-6">
            {/* Page Title */}
            <h1 className="text-[#006FB9] text-[24px] font-roboto text-2xl font-bold">Add Integrations</h1>

            {/* Invite Button */}
            
          </div>
          <div className="flex justify-between items-center px-10 py-6">
  <button className="bg-[#006FB9] text-white text-sm rounded-[8px] py-2 px-4 flex items-center gap-2 ml-auto">
    + Invite members
  </button>
</div>

          {/* Integration Cards */}
          <div className="px-6">
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <IntegrationCard
                name="Google Calendar"
                icon={
                  <img
                    src="https://s3-alpha-sig.figma.com/img/5ad1/33a0/1423545cee58a15df364aa7d0c8c24f7?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ByksFM-hcq-jALwBGFpZ5dRgctcrPZGvI8CUcbDP2xvGIkhKv9psj71s-mxVaTMDGDdlfK2uQFQ8N78pYcJU2fEb6np00XHx8BXmL2TA4cU6lY6lsH5POPW4e7Cmy2XckxlbI5Qwh-izEA5Z8~sNw6hf32v6Z-qSCaF~Hv6SRQWpo1o4xae8vd3q2JiWpc1UPB0pIv-bYkqBO~Y2-Wp0s6lfVMGrVAIwtoqVUqwOo7DnqYGsm2ytCRtlWRRsJSC3bh4pWEDea37KQ1y5J-YwCRdLlQro7YnY3haUraqTnwyOUS40mkY9IMZejx5nzS2RV8W0-aJd2xZsZ~71I6gkjA__"
                    alt="Google Calendar"
                    className="w-[54px] h-[54px]"
                  />
                }
              />
              <IntegrationCard
                name="Zoom"
                icon={
                  <img
                    src="https://s3-alpha-sig.figma.com/img/0af3/1833/bc25d9d75183c6c3b1255e3338e60b7d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ezOqei7sIiiB5oLt9MM-ouqdV9A816kl0b4tKeXNlex20VqKw2J0Z3EGrHGdogIdDL~tgc4Nl4V4UCkjTMJdV3LuMMi0S-DOcibR2A~0B1TIubXCj2vJwQUFkg2I4zM1kybhB0~nUYsdJ8uo1f1XWnHbggZhpQcu2LzgQLHSPNovOomRCDiDuoFcJylIwcGOnQebo-FNMdjV810jL~SJOm5-1i1Y4cpC~AAJhM16CG8kjUoxp0OtaRl34K9uUriiXaNZ2DOVvhVK5q-JHCC6KfITH1GUSRhw1osJiPpaXK3MfyqBsJK7e4ml6O~Na~XwidSs3v8q7fyMLOm2QFP-bg__"
                    alt="Zoom"
                    className="w-[54px] h-[54px]"
                  />
                }
              />
              <IntegrationCard
                name="Outlook"
                icon={
                  <img
                    src="https://s3-alpha-sig.figma.com/img/2ce7/01e3/317cc4b29dc4a2894b960cb43f681d8e?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ObLKgl9Yun8SxJz5NgfzRPkyfCJzu88ga~2NXtPZJlIPbfFalj9wFrTK8bMvXwkyIBwUC4YMC1ZBGpVrpQseJEuRpxK95pbYxvDM9S-C5Bd91cyEZCofFivXeaKmoZCdivobQ~Cw-ktA-58xYeA3lwEZTIGDPV8luItl-KEIWH1giExRADD6H-0ACfExPAjR4Ab2GcuSQ4rqyoZ~EHB6GhmuP3k3vgpajsLQIhpghOEcHM2llh8G6VAJz910jtsjXduXc6vk3k7bGKS08Oa2xh22dURRzc6UQA00ZC9hXi4hjaxAySilYtUEjdz0Ce0LACKuyfLOHL~yMQ1LeHhDgg__"
                    alt="Outlook"
                    className="w-[54px] h-[54px]"
                  />
                }
              />
              <IntegrationCard
                name="Outlook Calendar"
                icon={
                  <img
                    src="https://s3-alpha-sig.figma.com/img/58fd/0059/24fdffc0ee7340c959af0cef4c1e6c42?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mAsLCPfhLz-4q9PdkwwFORj~8-EoC8J1W4zPdlVPoVI9l~YTofCx8A6cSDfhwxuf203q~xyPRZjWAoARu9JW8k0s3f1kexFCFQQc-P0H7YRMly61bCOGM50ie1pXT5za~SUm6PqXPCn8QLuXbDiXYZFBcITnYdPbOQmhCjWRdRXRO0JssCOSY-PNTEGXttiT~K6JGYFZ9C0~NcLvRUft3BzHOwjVCRPhnsfhpwKMPqZD01RyD296hI64tZpqAAan7NbFIJ9ME9P0rDcC5fVmivVSQ6WrL4c~NGoOTAhPDZZn091Ns~R3bPI-1RotH-6Tf7CRMHw2aNgRhcM~SJNVtA__"
                    alt="Outlook Calendar"
                    className="w-[52px] h-[56px]"
                  />
                }
              />
              <IntegrationCard
                name="Gmail"
                icon={
                  <img
                    src="https://s3-alpha-sig.figma.com/img/c7d7/172c/54ab0ee7dd2186476bf2e6c7b808ac70?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tuxv~FCoDBhu4iYIbOlQig3iDVM~IZdE3KJDyKvpcEGORJDcnWPn3v147hqLz6ko6ACVeuLUq9R3piZl11RmV~yYBezis5S8MAY9bY6~wviSH3jEuAYhdRkB~CeSt9uGYWesowVvk~5iSBPp5YU3uUq8Np3KDIYUJRxGUI4jH5Z4WU1crgDUWqkunHoV6DMqtEmqsdym16CKfmm-EvWtaCFyLgW8xslC4ETfyImt51nzHw6ICpYrylcLGVHCgFQ2hXurz7UiX7usGLqndz7GfmsbFs9N0327-sXS6pPrperIlA~E8oxagh5SjdsmzZSMtk7IwN~qV2yVyWm80GLTAw__"
                    alt="Gmail"
                    className="w-[61px] h-[54px]"
                  />
                }
              />
              <IntegrationCard
                name="Zapier"
                icon={
                  <img
                    src="https://s3-alpha-sig.figma.com/img/0732/da10/a538af5321905bd75c6805db66c87e13?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n8pey3-wHg3hQ9a4fHRXJKaqilXyMPTYWIzjMuZkcPcS2J1p3c1QbtIGaaERnuLFa3Th~0SJrRp~yoF49pA8f-F2m3b1qD8nVh1Xmo-iL9s~tLtX1w5HT4cIufNoX4TkvFNcN35gm-S4BLyynACRmb5kUWw5tz8JpBeccPfiVVQRSTjPBr5~7nYwKbP6jTiglkGI6uJ2XxDXQTL75EoSpV4BMeA2bPhNQs1MzTXvTT2DAptGbergJYTF9V-06RQbMrzDJvYV3ZalDIIdIpRuH5o9GQea8jcVlIElP1HtCnKye9dLQPgsXBcqKTKoCOODh3tFVF6yVEk8ARdVWFAdcw__"
                    alt="Zapier"
                    className="w-[54px] h-[54px] rounded-[12px]"
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

