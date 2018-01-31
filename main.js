const Vector3 = function(x, y, z) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
};
Vector3.prototype.add = function(vector) {
  this.x += vector.x;
  this.y += vector.y;
  this.z += vector.z;
};
Vector3.prototype.sub = function(vector) {
  this.x -= vector.x;
  this.y -= vector.y;
  this.z -= vector.z;
};
Vector3.prototype.mult = function(scalar) {
  this.x *= scalar;
  this.y *= scalar;
  this.z *= scalar;
};
Vector3.prototype.div = function(scalar) {
  this.x /= scalar;
  this.y /= scalar;
  this.z /= scalar;
};
Vector3.prototype.get = function() {
  return new Vector3(this.x, this.y, this.z);
};
Vector3.prototype.set = function(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};
Vector3.prototype.lerp = function(vector, stage) {
  this.x += (vector.x - this.x) * stage;
  this.y += (vector.y - this.y) * stage;
  this.z += (vector.z - this.z) * stage;
};
Vector3.prototype.mag = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
};
Vector3.prototype.magSq = function() {
  return this.x * this.x + this.y * this.y + this.z * this.z;
};
Vector3.prototype.norm = function() {
  this.div(this.mag());
};

Vector3.prototype.dot = function(vector) {
  return new Vector3(
    this.x * vector.x,
    this.y * vector.y,
    this.z * vector.z
  );
};
Vector3.prototype.cross = function(vector) {
  return new Vector3(
    this.y * vector.z - this.z * vector.y,
    this.z * vector.x - this.x * vector.z,
    this.x * vector.y - this.y * vector.x
  );
};




