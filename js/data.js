const DATA = {
    passionFields: [
        { icon: '🏥', name: 'Healthcare & Medicine', desc: 'Predictive diagnostics, drug discovery', page: 'healthcare.html', class: 'healthcare' },
        { icon: '💰', name: 'Financial Services', desc: 'Risk modeling, algo trading', page: 'finance.html', class: 'finance' },
        { icon: '🌱', name: 'Renewable Energy', desc: 'Smart grids, optimization', page: 'renewable-energy.html', class: 'renewable' },
        { icon: '🤖', name: 'Military Robotics', desc: 'UAVs, swarms, hypersonic', page: 'military-robotics.html', class: 'robotics' },
        { icon: '🚀', name: 'Aerospace & Space', desc: 'SATCOM, asteroid mining', page: 'aerospace.html', class: 'aerospace' },
        { icon: '🔐', name: 'Cybersecurity', desc: 'Quantum crypto, GEOINT', page: 'cybersecurity.html', class: 'cybersecurity' },
        { icon: '⚛️', name: 'Next-Gen Materials', desc: 'Ballistics, stealth, DEW', page: 'materials.html', class: 'materials' },
        { icon: '🚢', name: 'Strategic Infra.', desc: 'Submarines, virtual training', page: 'infrastructure.html', class: 'infrastructure' },
        { icon: '📊', name: 'Enterprise Tech', desc: 'FinOps, RPA, quantum info', page: 'enterprise-tech.html', class: 'enterprise' },
        { icon: '💼', name: 'Corporate Finance', desc: 'M&A, treasury, risk', page: 'corporate-finance.html', class: 'corporate' },
        { icon: '🌐', name: 'Global Supply Chain', desc: 'Logistics, procurement', page: 'supply-chain.html', class: 'supplychain' },
        { icon: '🏛️', name: 'Governance & Policy', desc: 'ESG, antitrust, crisis', page: 'governance.html', class: 'governance' },
        { icon: '📱', name: 'Digital Product', desc: 'Growth Eng., PM, success', page: 'digital-product.html', class: 'digital' }
    ],

    projects: [
        { icon: '🌿', name: 'Iris Classification', desc: 'Classic ML project for Iris flower species prediction.', tech: ['scikit-learn', 'Pandas'], link: 'https://github.com/InfinitePraveen/Iris_Flower_Classification-Project' },
        { icon: '🚢', name: 'Titanic Survival', desc: 'Kaggle competition: predict survival on Titanic.', tech: ['scikit-learn', 'Pandas'], link: 'https://github.com/InfinitePraveen/Titanic-Survival-Prediction-Kaggle-Competition' },
        { icon: '🏠', name: 'Ames Housing', desc: 'Predicting house prices using advanced regression.', tech: ['scikit-learn', 'Pandas'], link: 'https://github.com/InfinitePraveen/Ames-Housing-Prediction' },
        { icon: '📺', name: 'Netflix EDA', desc: 'Exploratory data analysis on Netflix dataset.', tech: ['Pandas', 'Plotly'], link: 'https://github.com/InfinitePraveen/EDA-on-Netflix-Dataset' },
        { icon: '📧', name: 'Spam Detector', desc: 'NLP-based spam classification system.', tech: ['NLTK', 'scikit-learn'], link: 'https://github.com/InfinitePraveen/Spam-Email-Detector' },
        { icon: '📊', name: 'Student Grade Predictor', desc: 'ML model for predicting student performance.', tech: ['scikit-learn', 'Pandas'], link: 'https://github.com/InfinitePraveen/Student-Grade-Predictor' },
        { icon: '🌤️', name: 'Weather Dashboard', desc: 'Interactive weather analytics dashboard.', tech: ['Streamlit', 'Pandas'], link: 'https://github.com/InfinitePraveen/Weather-Data-Dashboard' }
    ],

    study: [
        { icon: '📊', name: 'Data Visualization', desc: 'Mastering data visualization with Python.', tech: ['Matplotlib', 'Seaborn'], link: 'https://github.com/InfinitePraveen/Data-Visualization' },
        { icon: '🐍', name: 'Python Fundamentals', desc: 'Core Python practices and exercises.', tech: ['Python'], link: 'https://github.com/InfinitePraveen/Python-Fundamentals-Practices' },
        { icon: '🔢', name: 'Scientific Computing with NumPy', desc: 'Complete NumPy mastery from basics to advanced.', tech: ['NumPy', 'Jupyter'], link: 'https://github.com/InfinitePraveen/Scientific-Computing-with-NumPy' },
        { icon: '🐼', name: 'Pandas Mastery', desc: 'Comprehensive guide to Pandas for data science.', tech: ['Pandas', 'Jupyter'], link: 'https://github.com/InfinitePraveen/Pandas-Mastery' }
    ],

    prs: [
        { icon: '🔄', name: 'scikit-learn', desc: 'Contributions to the leading ML library.', tech: ['Python', 'Machine Learning'], link: 'https://github.com/InfinitePraveen/scikit-learn' },
        { icon: '📦', name: 'More coming', desc: 'Active open-source contributions in progress.', tech: ['Python', 'Open Source'], link: '#' }
    ],

    research: [
        { icon: '🔬', title: 'Predictive diagnostics in low-resource settings', desc: 'Exploring cost-effective ML pipelines for early disease detection using limited labeled data.', link: 'https://github.com/InfinitePraveen/Healthcare-AI-Pipeline' },
        { icon: '⚡', title: 'Renewable energy grid optimization', desc: 'Reinforcement learning for dynamic load balancing and smart grid stability.', link: 'https://github.com/InfinitePraveen/Smart-Grid-RL' },
        { icon: '🔐', title: 'Quantum-resistant cryptography', desc: 'Post-quantum crypto primitives for secure strategic communications.', link: 'https://github.com/InfinitePraveen/Quantum-Crypto-Research' },
        { icon: '🛰️', title: 'Space debris collision avoidance', desc: 'Using time-series AI to predict orbital debris trajectories and satellite risk.', link: 'https://github.com/InfinitePraveen/Space-Debris-AI' },
        { icon: '🧬', title: 'Genomic Data Analysis for Drug Discovery', desc: 'Bioinformatics pipeline for identifying disease-associated genetic markers.', link: 'https://github.com/InfinitePraveen/Genomic-Analysis-Drug-Discovery' },
        { icon: '🌍', title: 'Climate Change Impact Prediction', desc: 'Using ML to predict long-term climate patterns and their impact on global ecosystems.', link: 'https://github.com/InfinitePraveen/Climate-Change-Prediction' }
    ],

    certifications: [
        { icon: '🏅', name: 'Data Analysis with Python', issuer: 'IBM', date: '2024', link: 'https://www.credly.com/badges/sample-data-analysis' },
        { icon: '🏅', name: 'Data Visualization with Python', issuer: 'IBM', date: '2024', link: 'https://www.credly.com/badges/sample-data-viz' },
        { icon: '🏅', name: 'Applied Data Science with Python', issuer: 'IBM', level: 'Level 2', date: '2024', link: 'https://www.credly.com/badges/sample-applied-ds' },
        { icon: '🏅', name: 'Python for Everybody', issuer: 'FreeCodeCamp', date: '2023', link: 'https://www.freecodecamp.org/certification/sample-python' },
        { icon: '🏅', name: 'Machine Learning Specialization', issuer: 'Stanford University', date: '2024', link: 'https://www.coursera.org/account/accomplishments/sample-ml' },
        { icon: '🏅', name: 'Deep Learning Specialization', issuer: 'DeepLearning.AI', date: '2024', link: 'https://www.coursera.org/account/accomplishments/sample-dl' }
    ],

    experience: [
        { icon: '💼', title: 'Data Science Intern', company: 'TechCorp AI Labs', date: '2024 - Present', desc: 'Working on predictive models for healthcare diagnostics and implementing ML pipelines.', link: 'https://linkedin.com/in/your-profile' },
        { icon: '📊', title: 'Data Analyst', company: 'Analytics Hub Inc.', date: '2023 - 2024', desc: 'Built dashboards and performed EDA for financial services clients using Python and Tableau.', link: 'https://linkedin.com/in/your-profile' },
        { icon: '🔬', title: 'Research Assistant', company: 'University AI Lab', date: '2022 - 2023', desc: 'Conducted research on reinforcement learning applications in renewable energy systems.', link: 'https://linkedin.com/in/your-profile' },
        { icon: '🌐', title: 'Open Source Contributor', company: 'scikit-learn Community', date: '2023 - Present', desc: 'Contributing to documentation and bug fixes for the scikit-learn library.', link: 'https://github.com/InfinitePraveen/scikit-learn' }
    ]
};