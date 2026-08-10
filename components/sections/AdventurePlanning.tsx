import { 
    FaFileAlt, FaFirstAid, FaTag, FaClipboardList, FaTruck, 
    FaTools, FaImage, FaBell, FaInstagram, FaUsers 
} from 'react-icons/fa';

const questions = [
    {
        left: 'How many reviews does it have?',
        leftIcon: FaFileAlt,
        right: 'What happens if someone gets injured?',
        rightIcon: FaFirstAid
    },
    {
        left: 'Is it worth the price?',
        leftIcon: FaTag,
        right: 'Is there a safety briefing before the activity?',
        rightIcon: FaClipboardList
    },
    {
        left: 'Is pickup included?',
        leftIcon: FaTruck,
        right: 'How is the equipment inspected and monitored?',
        rightIcon: FaTools
    },
    {
        left: 'How many photos will I get?',
        leftIcon: FaImage,
        right: 'What emergency support is available?',
        rightIcon: FaBell
    },
    {
        left: 'Is it popular on Instagram?',
        leftIcon: FaInstagram,
        right: 'Are there limits on group size, permits, or route access?',
        rightIcon: FaUsers
    }
];

export default function AdventurePlanning() {
    return (
        <section className="section-padding bg-[#FBFAFF]">
            <div className="max-w-7xl mx-auto px-8">
                <div className="section-box">
                    <h2 className="font-display font-semibold text-[42px] text-[#2B2740] text-center mb-3">
                        Adventure planning doesn't stop at desire.
                    </h2>

                    <p className="font-display font-semibold text-center text-[#7E6BB3] text-base mb-10">
                        Before you book, ask better safety questions
                    </p>

                    <div className="max-w-5xl mx-auto space-y-4">
                        {questions.map((q, index) => (
                            <div key={index} className="flex items-center justify-between gap-4 py-2 px-3">
                                <div className="flex items-center gap-3 flex-1 bg-[#FFF5F0] rounded-lg px-4 py-3">
                                    <q.leftIcon className="text-[#C77D72] text-lg flex-shrink-0" />
                                    <span className="text-[#C77D72] text-sm font-normal">{q.left}</span>
                                </div>

                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DCCAF8] flex items-center justify-center">
                                    <span className="text-[#765FB1] text-xs font-medium font-sans">VS</span>
                                </div>

                                <div className="flex items-center gap-3 flex-1 bg-[#EEE8FA] rounded-lg px-4 py-3">
                                    <q.rightIcon className="text-[#6F6096] text-lg flex-shrink-0" />
                                    <span className="text-[#6F6096] text-sm font-normal">{q.right}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}