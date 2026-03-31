const field = document.getElementById('spark-field');

if (field) {
  const sparkCount = 26;

  for (let i = 0; i < sparkCount; i += 1) {
    const spark = document.createElement('span');
    spark.className = 'spark';

    const left = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = 3.8 + Math.random() * 4;
    const scale = 0.6 + Math.random() * 1.1;

    spark.style.left = `${left}%`;
    spark.style.bottom = `${-10 - Math.random() * 40}px`;
    spark.style.animationDelay = `${delay}s`;
    spark.style.animationDuration = `${duration}s`;
    spark.style.transform = `scale(${scale})`;

    field.appendChild(spark);
  }
}
