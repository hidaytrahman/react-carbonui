import styled from 'styled-components';

interface ModalContainerTypes {}

export const ModalContent = styled.div`
	margin: 0 auto;
	width: 400px;
	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	header,
	article,
	footer {
		padding: 1rem;
	}

	header {
		display: flex;
		justify-content: space-between;
		background: #f7f7f7;

		.modal-title {
			font-size: 18px;
			font-weight: 600;
		}
	}

	article {
	}

	footer {
		display: flex;
		justify-content: flex-end;
		gap: 12px;
		background: #f7f7f7;
	}
`;

export const ModalContainer = styled.div<ModalContainerTypes>`
	background: black;
	position: fixed;
	height: 100%;
	width: 100%;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
`;
