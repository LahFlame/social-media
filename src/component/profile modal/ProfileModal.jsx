import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpened,setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={()=> setModalOpened(false)}
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
        size="55%"
      >
        <form className='infoForm'>
            <h3>Your Info</h3>
            <div>
                <input type="text" className='infoInput' name='firstName' placeholder='First Name' />
                <input type="text" className='infoInput' name='lastName' placeholder='Last Name' />
            </div>
            <div>
                <input type="text" className='infoInput' name='worksAt' placeholder='Works At' />
            </div>
            <div>
                <input type="text" className='infoInput' name='livesIn' placeholder='Lives In' />
                <input type="text" className='infoInput' name='country' placeholder='Country' />
            </div>
            <div>
                <input type="text" className='infoInput' placeholder='Relationship Status' />
            </div>
            <div>
                Profile Image
                <input type="file" name='profileImage'  />
                Cover Image 
                <input type="file" name='coverImage'/>
            </div>
            <button className='button infoButton'>Update</button>
        </form>
      </Modal>
    </>
  );
}

export default ProfileModal;