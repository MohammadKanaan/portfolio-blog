'use client'

import { Download } from 'lucide-react'

export default function DownloadResumeButton() {
  return (
    <a href="/Mohammad_Kanaan_Resume.pdf">
      <button className="mb-4 rounded-md bg-primary-500 px-4 py-2 text-white hover:bg-primary-600">
        <Download size={16} className="mr-2 inline-block" />
        Resume
      </button>
    </a>
  )
}
