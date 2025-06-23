// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "(*) denotes equal contribution",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-self-attention-amortized-distributional-projection-optimization-for-sliced-wasserstein-point-cloud-reconstruction",
      
        title: "Self-Attention Amortized Distributional Projection Optimization for Sliced Wasserstein Point-Cloud Reconstruction",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/SADSW/";
        
      },
    },{id: "post-improving-mini-batch-optimal-transport-via-partial-transportation",
      
        title: "Improving Mini-batch Optimal Transport via Partial Transportation",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/mPOT/";
        
      },
    },{id: "post-on-transportation-of-mini-batches-a-hierarchical-approach",
      
        title: "On Transportation of Mini-batches: A Hierarchical Approach",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/BoMbOT/";
        
      },
    },{id: "news-two-papers-are-accepted-at-icml-2022",
          title: 'Two papers are accepted at ICML 2022.',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-at-icassp-2023",
          title: 'One paper is accepted at ICASSP 2023.',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-at-icml-2023",
          title: 'One paper is accepted at ICML 2023.',
          description: "",
          section: "News",},{id: "news-our-paper-on-cross-layer-alignment-for-model-fusion-of-heterogeneous-neural-networks-is-recognized-as-one-of-the-top-3-of-all-papers-accepted-at-icassp-2023",
          title: 'Our paper On Cross-Layer Alignment for Model Fusion of Heterogeneous Neural Networks is...',
          description: "",
          section: "News",},{id: "news-i-start-my-ph-d-in-computer-science-at-ucla",
          title: 'I start my Ph.D. in Computer Science at UCLA.',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-at-iclr-2024",
          title: 'One paper is accepted at ICLR 2024.',
          description: "",
          section: "News",},{id: "news-our-paper-understanding-the-robustness-of-multi-modal-contrastive-learning-to-distribution-shift-is-accepted-to-dmlr-iclr-2024",
          title: 'Our paper Understanding the Robustness of Multi-modal Contrastive Learning to Distribution Shift is...',
          description: "",
          section: "News",},{id: "news-i-join-cisco-as-a-phd-research-intern",
          title: 'I join Cisco as a PhD research intern.',
          description: "",
          section: "News",},{id: "news-i-join-google-research-as-a-student-researcher",
          title: 'I join Google Research as a Student Researcher.',
          description: "",
          section: "News",},{id: "news-our-paper-changing-the-training-data-distribution-to-reduce-simplicity-bias-improves-in-distribution-generalization-is-accepted-to-neurips-2024",
          title: 'Our paper Changing the Training Data Distribution to Reduce Simplicity Bias Improves In-distribution...',
          description: "",
          section: "News",},{id: "news-our-paper-mini-batch-coresets-for-memory-efficient-language-model-training-on-data-mixtures-is-accepted-to-iclr-2025",
          title: 'Our paper Mini-batch Coresets for Memory-efficient Language Model Training on Data Mixtures is...',
          description: "",
          section: "News",},{id: "news-our-paper-synthetic-text-generation-for-training-large-language-models-via-gradient-matching-is-accepted-to-icml-2025",
          title: 'Our paper Synthetic Text Generation for Training Large Language Models via Gradient Matching...',
          description: "",
          section: "News",},{id: "news-our-paper-beyond-semantic-entropy-boosting-llm-uncertainty-quantification-with-pairwise-semantic-similarity-is-accepted-to-acl-findings-2025",
          title: 'Our paper Beyond Semantic Entropy: Boosting LLM Uncertainty Quantification with Pairwise Semantic Similarity...',
          description: "",
          section: "News",},{id: "news-i-have-officially-advanced-to-ph-d-candidacy-looking-forward-to-the-next-stage-of-my-research-journey",
          title: 'I have officially advanced to Ph.D. candidacy! Looking forward to the next stage...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%67%75%79%65%6E%74%75%61%6E%68%61%69%64%61%6E%67@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/hsgser", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/dang-nguyen-50b7a7a0", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=WIqAtrcAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/dangnth97", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
