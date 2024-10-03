export default function closeModal() {
    const modal = document.getElementById('modal'); 
    return modal.classList.add('hidden');
}