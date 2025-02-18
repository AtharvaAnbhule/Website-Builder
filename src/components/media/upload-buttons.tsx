'use client'
 
import React from 'react'
import { Button } from '../ui/button'
import CustomModal from '../../../src/components/global/custom-modal'
import UploadMediaForm from '../forms/upload-media'
import { useModal } from '@/app/providers/modal-provider'

type Props = {
  subaccountId: string
}

const MediaUploadButton = ({ subaccountId }: Props) => {
  const { isOpen, setOpen, setClose } = useModal()

  return (
    <Button
      onClick={() => {
        setOpen(
          <CustomModal
            title="Upload Media"
            subheading="Upload a file to your media bucket"
          >
            <UploadMediaForm subaccountId={subaccountId}></UploadMediaForm>
          </CustomModal>
        )
      }}
    >
      Upload
    </Button>
  )
}

export default MediaUploadButton
