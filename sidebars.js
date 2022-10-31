module.exports = {
  mySidebar: [
    'index',
    'installation',
    'upgrade',
    {
      type: 'category', 
      label: 'Operation',
      collapsed: true,
      items: [
        'operation/run_xp_job',
        'operation/executecons',
        'operation/maintain_logfiles',
        'operation/smacapturedatestamp',
        'operation/smacheckconsolelog',
        'operation/smafetchcontrolnumber',
        'operation/smafetchdocnumber',
        'operation/smafetchqueueddocnumber',
        'operation/smasavedsxlistrptnumbers',
        'operation/waitforxpjob',
      ], 
    },
    {
      type: 'category', 
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/run-xp-job-ini',
        'reference/smafetchcontrolnumber',
        'reference/autoreplyfile-format',
        'reference/msgin-file',
        'reference/faq',
      ], 
    },

  ],
};
