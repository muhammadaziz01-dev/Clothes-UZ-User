import "./style.scss";


const index = () => {
    return (
        <footer className="w-full">
            <div className="orginal-container">
                <div className="grid py-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4   gap-[20px] max-w-sm px-4  md:max-w-none md:mx-0">
                   <div className="flec flex-col gap-2">
                    <h1 className="text-[18px]">Biz haqimizda</h1>
                    <p className="text-[14px] text-gray-500 py-2">Topshirish punctlari</p>
                    <p className="text-[14px] text-gray-500">Vakansiyalr</p>
                   </div>
                   <div className="flec flex-col gap-2">
                    <h1 className="text-[18px]">Foydalanuvchilarga</h1>
                    <p className="text-[14px] text-gray-500 py-2">Biz bilan boglanish</p>
                    <p className="text-[14px] text-gray-500">Savol - Javoblar</p>
                   </div>
                   <div className="flec flex-col gap-2">
                    <h1 className="text-[18px]">Tadbirkorlarga</h1>
                    <p className="text-[14px] text-gray-500 py-2">Clothes-UZ da soting</p>
                    <p className="text-[14px] text-gray-500">Satuvchi cabinetiga kiring</p>
                   </div>
                   <div className="flec flex-col ">
                    <h1 className="text-[18px]">Clothes-UZ ishtimoyi tarmoqlarda</h1>
                    <div className="flex items-center gap-2 pt-2">
                        <img className="w-[32px] h-[32px]" src="https://www.svgrepo.com/show/452229/instagram-1.svg" alt="instagram" />
                        <img className="w-[32px] h-[32px]" src="https://www.svgrepo.com/show/349527/telegram.svg" alt="instagram" />
                        <img className="w-[32px] h-[32px]" src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="instagram" />
                        <img className="w-[32px] h-[32px]" src="https://www.svgrepo.com/show/349577/youtube.svg" alt="instagram" />
                    </div>
                   </div>
                </div>
            </div>
            <div className="w-full bg-slate-500">
                <div className="orginal-container">
                    <p className="text-center text-[14px] text-gray-100 py-[10px]">© {new Date().getFullYear()} Clothes-UZ. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default index;