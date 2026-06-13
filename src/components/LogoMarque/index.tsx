import './index.css';

const COMPANIES = ['FACEBOOK', 'AMAZON', 'GOOGLE', 'TWITTER', 'TESLA', 'UBER', 'ATLASSIAN'];

const CompanyList = () => (
    <div className="flex shrink-0">
        {COMPANIES.map((company) => (
            <div key={company} className="px-20 py-10">
                {company}
            </div>
        ))}
    </div>
);

export const LogoMarque = () => {
    return (
        <div className="flex h-screen items-center overflow-hidden">
            <div className="marquee-track">
                <CompanyList />
                <CompanyList />
            </div>
        </div>
    );
};
