import React from 'react'
import styled from 'styled-components'


function SidebarOption({Icon, title, }) {
    return(
        <div>
        <SidebarOptionContainer>
            {Icon && <Icon fontSize='small' style= {{padding: 10}}/>}
        </SidebarOptionContainer>
        </div>
        );
        }

export default SidebarOption;

const SidebarOptionContainer = styled.div``;
